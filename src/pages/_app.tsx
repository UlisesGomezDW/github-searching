import "normalize.css"
import type { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"
import { theme } from "src/theme"
import { GlobalStyle } from "src/styles/global.styled"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
