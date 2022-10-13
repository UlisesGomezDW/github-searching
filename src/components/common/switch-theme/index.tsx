import { DarkModeSwitch } from "react-toggle-dark-mode"
import { useThemeState } from "src/hooks/state"
import { useTheme } from "styled-components"

function SwitchTheme(): JSX.Element {
    const { value, toggle } = useThemeState()
    const { font } = useTheme()

    return (
        <DarkModeSwitch
            className="switch-theme"
            moonColor={font.color.primary}
            sunColor={font.color.primary}
            checked={!value}
            onChange={toggle}
            size={25}
        />
    )
}

export default SwitchTheme
