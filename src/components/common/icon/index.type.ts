import { NamedExoticComponent, SVGProps } from "react"

export interface Props extends SVGProps<SVGSVGElement> {
    name: "star" | "repository"
    fillColor?: string
}

export type Collection = {
    star: NamedExoticComponent
    repository: NamedExoticComponent
}
