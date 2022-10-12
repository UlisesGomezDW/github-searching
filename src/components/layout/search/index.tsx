import { useState } from "react"
import Icon from "src/components/common/icon"
import SearchInput from "src/components/common/input/search"
import Touchable from "src/components/common/touchable"
import { Section } from "./index.styled"
import { Props } from "./index.type"

function SearchLayout(props: Props): JSX.Element {
    const { children, className = "", style = {} } = props
    const [search, setSearch] = useState<string>("")
    return (
        <Section className={className} style={style}>
            <section className="section-header">
                <Touchable className="section-back">
                    <Icon height={"100%"} width={"100%"} name={"arrowLeft"} />
                </Touchable>
                <SearchInput
                    className="section-search-input"
                    placeholder="¿Qué quieres escuchar?"
                    value={search}
                    onChange={(value) => setSearch(value)}
                />
            </section>
            <section className="section-main">{children}</section>
        </Section>
    )
}

export default SearchLayout
