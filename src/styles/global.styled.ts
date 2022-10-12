import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        -webkit-tap-highlight-color: transparent;
        box-sizing: border-box;
    }
    html,
    body {
        font-size: 10px;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    p {
        margin: 0;
        color: ${({ theme }) => theme.font.color.primary};
    }
    h5 {
        margin: 0;
        color: ${({ theme }) => theme.font.color.primary};
    }

`
