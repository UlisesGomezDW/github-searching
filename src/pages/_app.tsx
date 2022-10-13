import "normalize.css"
import type { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"
import NextNProgress from "nextjs-progressbar"
import { theme, SOLID } from "src/theme"
import { GlobalStyle } from "src/styles/global.styled"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <NextNProgress color={SOLID} height={5} />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

export default MyApp
