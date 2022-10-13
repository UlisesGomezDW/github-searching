import styled from "styled-components"

export const Base = styled.span`
    display: inline-block;
    white-space: nowrap;
    font-size: 1.2rem;
    line-height: 2.2rem;
    font-weight: 500;
    padding: 0 0.7rem;
    color: ${({ theme }) => theme.color.solid};
    background-color: ${({ theme }) => `${theme.color.solid}0d`};
    border-radius: 3px;
    border: 1px solid ${({ theme }) => theme.color.solid};
`
