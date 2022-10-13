import "normalize.css"
import type { AppProps } from "next/app"
import Theme from "src/theme/provider"
import NextNProgress from "nextjs-progressbar"
import { SOLID } from "src/theme"
import { GlobalStyle } from "src/styles/global.styled"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Theme>
                <GlobalStyle />
                <NextNProgress color={SOLID} height={5} />
                <Component {...pageProps} />
            </Theme>
        </>
    )
}

export default MyApp
