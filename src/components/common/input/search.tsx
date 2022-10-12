import { useState } from "react"
import { useTheme } from "styled-components"
import Icon from "../icon"
import Touchable from "../touchable"
import Input from "./index"
import { SearchBase } from "./index.styled"
import { SearchProps } from "./index.type"

function SearchInput(props: SearchProps): JSX.Element {
    const { className = "", style = {}, value = "", placeholder = "", onChange = null } = props
    const [focus, setFocus] = useState<boolean>(false)

    const { font } = useTheme()

    const handleChange = (value: string): void => {
        if (onChange) onChange(value)
    }

    return (
        <SearchBase focus={focus} className={className} style={style}>
            <Icon className="search-icon" name={"search"} fillColor={font.color.primary} />
            <Input
                className="search-input"
                placeholder={placeholder}
                value={value}
                onChange={(e) => handleChange(e.target.value)}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
            />
            {value && (
                <Touchable className="search-close" onClick={() => handleChange("")}>
                    <Icon width={"100%"} height={"100%"} name={"close"} fillColor={font.color.primary} />
                </Touchable>
            )}
        </SearchBase>
    )
}

export default SearchInput
