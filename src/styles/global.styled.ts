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
        font-family: "Montserrat", sans-serif;
        color: ${({ theme }) => theme.font.color.primary};
    }
    a {
        color: inherit;
    }
    p {
        margin: 0;
        
    }
    h5, h1 {
        margin: 0;
    }

`
