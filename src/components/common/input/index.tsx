import { Base } from "./index.styled"
import { Props } from "./index.type"

function Input(props: Props): JSX.Element {
    return <Base {...props} type={"text"} />
}

export default Input
