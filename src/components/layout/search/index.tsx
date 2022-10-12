import { Section } from "./index.styled"
import { Props } from "./index.type"

function SearchLayout(props: Props): JSX.Element {
    const { children, className = "", style = {} } = props
    return (
        <Section className={className} style={style}>
            {children}
        </Section>
    )
}

export default SearchLayout
