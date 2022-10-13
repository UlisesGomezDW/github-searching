export interface User {
    login: string
    avatar_url: string
    html_url: string
}

export interface Repository {
    full_name: string
    html_url: string
    description: string
    language: string
    topics: string[]
    stargazers_count: number
    license: {
        name: string
    }
}
