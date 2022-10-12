import NextLink from "next/link"
import { Base } from "./index.styled"
import { Props } from "./index.type"

function Link(props: Props) {
    const { children = "", style = {}, href = "/", className = "" } = props

    return (
        <NextLink href={href} passHref>
            <Base style={style} className={className}>
                {children}
            </Base>
        </NextLink>
    )
}

export default Link
