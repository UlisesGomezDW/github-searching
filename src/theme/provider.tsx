import Provider from "src/context/theme.context"
import { useThemeState } from "src/hooks/state"
import { ThemeProvider } from "styled-components"
import { ProviderProps } from "src/types/state"

function Wrap(props: ProviderProps): JSX.Element {
    const { children } = props
    const { theme } = useThemeState()
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

function Theme(props: ProviderProps): JSX.Element {
    const { children } = props
    return (
        <Provider>
            <Wrap>{children}</Wrap>
        </Provider>
    )
}

export default Theme
