import { useContext } from "react"
import { ThemeContext } from "src/context/theme.context"
import { ThemeContextType } from "src/types/state"

export function useThemeState(): ThemeContextType {
    const { value, theme, toggle } = useContext<ThemeContextType>(ThemeContext)

    return {
        value,
        theme,
        toggle,
    }
}
