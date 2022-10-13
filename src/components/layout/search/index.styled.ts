import styled from "styled-components"
import StyledScroll from "src/components/common/scroll"

export const Section = styled.section`
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    .section-header {
        width: 100%;
        height: 68px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0 1.5rem;
        background-color: ${({ theme }) => theme.color.primary};
    }
    .section-back {
        height: 24px;
        width: 24px;
        margin-right: 10px;
    }
    .section-search-input {
        width: calc(100% - 34px);
    }
    .section-main {
        width: 100%;
        height: calc(100% - 68px);
    }
    .section-main-card {
        width: 100%;
        height: 100%;
        padding: 0 2rem;
        overflow-y: auto;
        ${StyledScroll};
    }
    .section-home {
        display: none;
        height: 32px;
        width: 32px;
        svg {
            fill: ${({ theme }) => theme.font.color.primary};
        }
    }
    .section-links {
        display: none;
    }
    @media only screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
        .section-back {
            display: none;
        }
        .section-home {
            display: block;
        }
        .section-links {
            display: block;
        }
        .section-header {
            position: relative;
            justify-content: space-between;
            padding: 0 2rem;
        }
        .section-search-input {
            width: 50%;
            position: absolute;
            margin-left: auto;
            margin-right: auto;
            left: 0;
            right: 0;
            text-align: center;
        }
        .section-main {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: ${({ theme }) => theme.color.background};
        }
        .section-main-card {
            height: 80vh;
            width: 80%;
            background-color: ${({ theme }) => theme.color.primary};
            border-radius: 20px;
        }
    }
    @media only screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
        .section-header {
            padding: 0 3rem;
        }
    }
    @media only screen and (min-width: ${({ theme }) => theme.breakPoints.xl}) {
        .section-header {
            padding: 0 4rem;
        }
    }
`
