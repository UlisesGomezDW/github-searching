import styled from "styled-components"

export const Container = styled.section`
    width: 100%;
    height: 100vh;
`
export const Header = styled.section`
    width: 100%;
    height: 68px;
    background-color: ${({ theme }) => theme.color.primary};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.border.color};
    .header-icon {
        height: 32px;
        width: 32px;
        svg {
            fill: ${({ theme }) => theme.font.color.primary};
        }
    }
    .header-nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        .switch-theme {
            margin-left: 2rem;
        }
    }
    .header-link:nth-child(1) {
        margin-right: 10px;
    }
    @media only screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
        padding: 0 3rem;
    }
    @media only screen and (min-width: ${({ theme }) => theme.breakPoints.xl}) {
        padding: 0 4rem;
    }
`

export const Main = styled.section`
    width: 100%;
    height: calc(100% - 68px);
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.background};
    .main-info-title {
        font-size: 4.2rem;
        margin-bottom: 2rem;
    }
    .main-info-description {
        font-size: 1.6rem;
    }
    .main-image {
        height: 50vh;
        position: relative;
    }
    @media only screen and (min-width: ${({ theme }) => theme.breakPoints.xs}) {
        .main-info-description {
            margin-bottom: 3rem;
        }
    }
    @media only screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
        .main-info-description {
            margin-bottom: 4rem;
        }
    }
    @media only screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 3rem;
        .main-info {
            height: auto;
            width: 50%;
        }
        .main-image {
            width: 40vw;
            height: 60vh;
        }
        .main-info-title {
            font-size: 4.8rem;
            margin-bottom: 2rem;
        }
        .main-info-description {
            font-size: 2rem;
            margin-bottom: 0;
            line-height: 1.5;
        }
    }
    @media only screen and (min-width: ${({ theme }) => theme.breakPoints.lg}) {
        padding: 0 5rem;
    }
`
