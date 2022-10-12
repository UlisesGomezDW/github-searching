export function range(start: number, end: number): number[] {
    let array: number[] = []

    for (let i = start; i <= end; i++) {
        array = [...array, i]
    }

    return array
}
