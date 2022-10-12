import { MouseEventHandler } from "react"
import { ComponentProps } from "src/types/component"

export interface Props extends ComponentProps {
    name: string
    description: string
    image: string
    onClick?: MouseEventHandler<HTMLDivElement> | undefined
}
