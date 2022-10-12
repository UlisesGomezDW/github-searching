import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        -webkit-tap-highlight-color: transparent;
        box-sizing: border-box;
    }
    *:focus {
        outline: none;
    }
    html,
    body {
        font-size: 10px;
        font-family: 'Montserrat', sans-serif;
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
