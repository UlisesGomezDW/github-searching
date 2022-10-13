import Image from "next/image"
import Icon from "src/components/common/icon"
import Link from "src/components/common/link"
import SwitchTheme from "src/components/common/switch-theme"
import Touchable from "src/components/common/touchable"
import { links } from "./index.data"
import { Container, Header, Main } from "./index.styled"

function Landing(): JSX.Element {
    return (
        <Container>
            <Header>
                <Touchable className="header-icon">
                    <Icon height={"100%"} width={"100%"} name={"github"} />
                </Touchable>
                <nav className="header-nav">
                    <div>
                        {links.map(({ name = "", path = "" }, index) => (
                            <Link className="header-link" key={index} href={path}>
                                {name}
                            </Link>
                        ))}
                    </div>
                    <SwitchTheme />
                </nav>
            </Header>
            <Main>
                <div className="main-info">
                    <h1 className="main-info-title">Encuentra el perfil o repositorio que buscas</h1>
                    <p className="main-info-description">
                        GitHub - Searching, ofrece una experiencia única en la busqueda de usuarios y repositorios.
                    </p>
                </div>
                <div className="main-image">
                    <Image src={"/png/home.png"} alt={"cover"} layout="fill" objectFit="contain" placeholder="empty" />
                </div>
            </Main>
        </Container>
    )
}

export default Landing
