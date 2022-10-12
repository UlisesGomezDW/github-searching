import { CSSProperties } from "react"

export type ComponentProps = {
    className?: string
    style?: CSSProperties
}

export type StyledPropsModel = {
    [key: string]: any
}
