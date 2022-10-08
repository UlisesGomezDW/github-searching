import { API_URL } from "enviroment"

export async function getGithubData(type: "users" | "repositories", search: string) {
    const response = await fetch(`${API_URL}/search/${type}?q=${search}&per_page=10`)
    const data = await response.json()

    return data
}
