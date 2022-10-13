import { Props } from "./index.type"
import { Base } from "./index.styled"

function EmptyScreen(props: Props): JSX.Element {
    const { title = "", description = "" } = props
    return <Base title={title} description={description} image="/png/not-found.png" />
}

export default EmptyScreen
