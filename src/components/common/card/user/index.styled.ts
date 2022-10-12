import styled from "styled-components"
import { CardBase } from "../index.styled"

export const Base = styled(CardBase)`
    align-items: center;
    .card-image {
        height: 4rem;
        width: 4rem;
        border-radius: 1rem;
    }
    .card-description {
        margin-left: 1.5rem;
    }
    .card-description-name {
        font-size: 1.6rem;
        margin-bottom: 0.5rem;
    }
    .card-description-label {
        font-size: 1.4rem;
        font-weight: 400;
        color: ${({ theme }) => theme.font.color.secondary};
        margin: 0;
    }
`
