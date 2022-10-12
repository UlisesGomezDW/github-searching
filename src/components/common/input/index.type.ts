import { DetailedHTMLProps, InputHTMLAttributes } from "react"
import { ComponentProps } from "src/types/component"

export interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

export interface SearchProps extends ComponentProps {
    value: string
    placeholder: string
    onChange?: (value: string) => void
}

export interface SearchStyledProps {
    focus: boolean
}
