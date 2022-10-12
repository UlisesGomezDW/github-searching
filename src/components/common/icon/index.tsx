import star from "./star"
import repository from "./repository"
import { Props, Collection } from "./index.type"

const COLLECTION: Collection = {
    star,
    repository,
}

function Icon(props: Props): JSX.Element {
    const { name = "", fillColor = "" } = props

    const IconComponent = name
        ? COLLECTION[name]
        : () => <div style={{ height: "1rem", width: "1rem", backgroundColor: "transparent" }} />

    return <IconComponent fill={fillColor} {...props} />
}

export default Icon
