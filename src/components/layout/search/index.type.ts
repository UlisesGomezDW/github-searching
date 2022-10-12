import { ReactNode } from "react"
import { ComponentProps } from "src/types/component"

export interface Props extends ComponentProps {
    children: ReactNode
    links: {
        name: string
        path: string
    }[]
}
