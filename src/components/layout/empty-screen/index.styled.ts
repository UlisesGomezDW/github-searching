import Empty from "src/components/common/empty"
import styled from "styled-components"

export const Base = styled(Empty)`
    height: 100%;
    background-color: ${({ theme }) => theme.color.primary};
`
