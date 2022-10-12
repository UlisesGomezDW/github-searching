import { css } from "styled-components"

const Scroll = css`
    &::-webkit-scrollbar {
        width: 7px;
        height: 7px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 7px;
        background-color: ${({ theme }) => theme.font.color.primary};
    }
    &::-webkit-scrollbar-corner {
        background-color: transparent;
    }
`

export default Scroll
