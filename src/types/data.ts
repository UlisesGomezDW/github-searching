export interface User {
    login: string
    avatar_url: string
    html_url: string
}

export interface Repositories {
    full_name: string
    html_url: string
    description: string
    owner: {
        avatar_url: string
    }
}
