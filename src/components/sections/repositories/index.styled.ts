import SkeletonComponent from "src/components/common/skeleton"
import styled from "styled-components"

export const Skeleton = styled(SkeletonComponent)`
    padding-top: 2rem;
    grid-template-columns: 1fr;
    row-gap: 2rem;
    .skeleton-item {
        height: 8.01rem;
    }
`

export const Content = styled.section`
    padding: 2rem 0;
`
