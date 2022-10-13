import { createContext, useState } from "react"
import { theme, darkTheme } from "src/theme"
import { ProviderProps, ThemeContextType } from "src/types/state"

export const ThemeContext = createContext<ThemeContextType>({
    value: false,
    theme: {},
    toggle: () => null,
})

const modelDarkTheme = {
    ...theme,
    color: darkTheme.color,
    font: { ...theme.font, color: darkTheme.font.color },
    border: darkTheme.border,
}

function Provider(props: ProviderProps): JSX.Element {
    const { children } = props
    const [darkMode, setDarkMode] = useState<boolean>(false)

    const toggle = () => setDarkMode(!darkMode)

    return (
        <ThemeContext.Provider
            value={{
                value: darkMode,
                theme: darkMode ? modelDarkTheme : theme,
                toggle,
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default Provider
