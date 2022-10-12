import { NamedExoticComponent, SVGProps } from "react"

export interface Props extends SVGProps<SVGSVGElement> {
    name: "star" | "repository" | "close" | "search" | "arrowLeft" | "github"
    fillColor?: string
}

export type Collection = {
    [key: string]: NamedExoticComponent
}
