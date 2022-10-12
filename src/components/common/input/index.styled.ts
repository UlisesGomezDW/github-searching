import styled from "styled-components"
import { StyledPropsModel } from "src/types/component"
import { SearchStyledProps } from "./index.type"

export const Base = styled.input<StyledPropsModel>`
    border: none;
    width: 100%;
    font-size: ${({ theme }) => theme.font.size.md};
    color: ${({ theme }) => theme.font.color.primary};
    font-weight: 500;
`

export const SearchBase = styled.div<SearchStyledProps>`
    width: 100%;
    height: 48px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 30px;
    background-color: #f5f9fd;
    border: 2px solid ${({ focus, theme }) => (focus ? theme.font.color.primary : "transparent")};
    padding: 0 10px;
    transition: all ease-in-out 0.15s;
    .search-input {
        height: 90%;
        width: calc(100% - 56px);
        background-color: transparent;
    }
    .search-icon {
        height: 24px;
        width: 24px;
        margin-right: 8px;
    }
    .search-close {
        height: 24px;
        width: 24px;
    }
`
