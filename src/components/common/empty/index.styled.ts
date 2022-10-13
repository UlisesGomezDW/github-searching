import styled from "styled-components"

export const Base = styled.section`
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .empty-title {
        font-size: ${({ theme }) => theme.font.size.lg};
        margin-bottom: 15px;
        margin-top: 30px;
        text-align: center;
    }
    .empty-description {
        text-align: center;
        font-size: ${({ theme }) => theme.font.size.sm};
    }
    @media only screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
        .empty-title {
            font-size: ${({ theme }) => theme.font.size.xxlg};
        }
        .empty-description {
            font-size: ${({ theme }) => theme.font.size.md};
        }
    }
`
