import { MouseEventHandler } from "react"
import { ComponentProps } from "src/types/component"

export interface Props extends ComponentProps {
    name: string
    description: string
    language: string
    topics: string[]
    license: string
    stars: number
    onClick?: MouseEventHandler<HTMLDivElement> | undefined
}

export type LangColors = {
    [key: string]: string
}
