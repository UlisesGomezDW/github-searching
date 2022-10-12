import { Base } from "./index.styled"
import { Props } from "./index.type"

function Empty(props: Props): JSX.Element {
    const {
        title = "",
        description = "",
        image = "",
        className = "",
        imageStyle = {},
        children = null,
        style = {},
    } = props

    return (
        <Base className={className} style={style}>
            {image && <img src={image} className="empty-image" height={"50%"} alt="empty-state" style={imageStyle} />}
            <h1 className="empty-title">{title}</h1>
            {description && <p className="empty-description">{description}</p>}
            {children && children}
        </Base>
    )
}

export default Empty
