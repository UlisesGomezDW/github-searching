export function externalRedirect(e: any, path: string): void {
    e?.preventDefault()
    window.open(path)
}
