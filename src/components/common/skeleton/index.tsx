import { range } from "src/utils/array"
import { Base, ItemBase } from "./index.styled"
import { ItemProps, Props } from "./index.type"

function Item(props: ItemProps): JSX.Element {
    const { className = "", style = {} } = props
    return <ItemBase className={className} style={style} />
}

function Skeleton(props: Props): JSX.Element {
    const { className = "", style = {}, elements = 1 } = props
    return (
        <Base className={className} style={style}>
            {range(1, elements).map((number: number) => (
                <Item className="skeleton-item" key={number} />
            ))}
        </Base>
    )
}

Skeleton.Item = Item

export default Skeleton
