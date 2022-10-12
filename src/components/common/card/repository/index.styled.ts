import styled from "styled-components"
import { CardBase } from "../index.styled"

export const Base = styled(CardBase)`
    flex-direction: column;
    .card-row {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .card-head {
        margin-bottom: 5px;
    }
    .card-head-icon {
        height: 1.6rem;
        width: 1.6rem;
    }
    .card-title {
        font-size: 1.6rem;
        margin-left: 0.5rem;
    }
    .card-description {
        font-size: 1.4rem;
        margin-bottom: 0.4rem;
    }
    .card-topics {
        margin-bottom: 0.5rem;
    }
    .card-item {
        margin-right: 1rem;
    }
    .card-item-icon {
        height: 1.6rem;
        width: 1.6rem;
        fill: ${({ theme }) => theme.font.color.secondary};
    }
    .card-item-label {
        font-size: 1.2rem;
        margin-left: 0.5rem;
        color: ${({ theme }) => theme.font.color.secondary};
    }
    .card-item-shape {
        width: 1.2rem;
        height: 1.2rem;
        background-color: black;
        border-radius: 50%;
    }
`
