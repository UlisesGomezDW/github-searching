import { Base } from "./index.styled"
import { Props } from "./index.type"

function Tag(props: Props): JSX.Element {
    const { className = "", style = {}, children = "" } = props
    return (
        <Base className={className} style={style}>
            {children}
        </Base>
    )
}

export default Tag
