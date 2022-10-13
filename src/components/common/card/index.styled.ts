import styled from "styled-components"

export const CardBase = styled.div`
    width: 100%;
    padding: 2rem 0;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid ${({ theme }) => theme.border.color};
    cursor: pointer;
`
