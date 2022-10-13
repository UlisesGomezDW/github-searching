import { useRouter } from "next/router"
import Icon from "src/components/common/icon"
import SearchInput from "src/components/common/input/search"
import Link from "src/components/common/link"
import Touchable from "src/components/common/touchable"
import { Section } from "./index.styled"
import { Props } from "./index.type"

function SearchLayout(props: Props): JSX.Element {
    const { children, className = "", style = {}, links = [], value = "", onChange } = props

    const router = useRouter()

    return (
        <Section className={className} style={style}>
            <section className="section-header">
                <Touchable className="section-home" onClick={() => router.replace("/")}>
                    <Icon height={"100%"} width={"100%"} name={"github"} />
                </Touchable>
                <Touchable className="section-back" onClick={() => router.back()}>
                    <Icon height={"100%"} width={"100%"} name={"arrowLeft"} />
                </Touchable>
                <SearchInput
                    className="section-search-input"
                    placeholder="¿Qué quieres buscar?"
                    value={value}
                    onChange={onChange}
                />
                <div className="section-links">
                    {links.length > 0 &&
                        links.map(({ name = "", path = "" }, index) => (
                            <Link key={index} href={path}>
                                {name}
                            </Link>
                        ))}
                </div>
            </section>
            <section className="section-main">
                <div className="section-main-card">{children}</div>
            </section>
        </Section>
    )
}

export default SearchLayout
