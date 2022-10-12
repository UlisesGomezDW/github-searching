import styled from "styled-components"

export const Section = styled.section`
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    .section-header {
        width: 100%;
        height: 68px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0 1.5rem;
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
        padding: 0 2rem;
        height: calc(100vh - 68px);
    }
`
