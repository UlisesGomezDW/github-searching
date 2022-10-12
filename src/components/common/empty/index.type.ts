import { CSSProperties, ReactNode } from "react"
import { ComponentProps } from "src/types/component"

export interface Props extends ComponentProps {
    title: string
    description: string
    image: string
    imageStyle?: CSSProperties
    children?: ReactNode | ReactNode[]
}
