import { memo, SVGProps } from "react"

const Close = memo((props: SVGProps<SVGSVGElement>) => {
    const { fill } = props
    return (
        <svg height="1rem" width="1rem" viewBox="0 0 24 24" {...props}>
            <path
                d="M3.293 3.293a1 1 0 011.414 0L12 10.586l7.293-7.293a1 1 0 111.414 1.414L13.414 12l7.293 7.293a1 1 0 01-1.414 1.414L12 13.414l-7.293 7.293a1 1 0 01-1.414-1.414L10.586 12 3.293 4.707a1 1 0 010-1.414z"
                fill={fill}
            ></path>
        </svg>
    )
})

export default Close
