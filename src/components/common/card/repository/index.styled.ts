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
        font-size: ${({ theme }) => theme.font.size.md};
        margin-left: 0.5rem;
    }
    .card-description {
        font-size: ${({ theme }) => theme.font.size.sm};
        margin-bottom: 0.4rem;
    }
    .card-topics {
        margin-bottom: 1rem;
    }
    .card-topics-tag {
        margin-top: 8px;
        margin-right: 8px;
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
        font-size: ${({ theme }) => theme.font.size.xs};
        margin-left: 0.5rem;
        color: ${({ theme }) => theme.font.color.secondary};
    }
    .card-item-shape {
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
    }
`
