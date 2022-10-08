import { useEffect, useState } from "react"
import { getGithubData } from "src/services"

export function useFetch(query: "users" | "repositories") {
    const [search, setSearch] = useState<string>("")

    const [data, setData] = useState<any[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        setLoading(true)
        const fetchData = setTimeout(async () => {
            if (search) {
                try {
                    const data = await getGithubData(query, search)
                    if (data?.items) setData(data?.items)
                } catch (e) {
                    console.log(e)
                }
            } else {
                setData([])
            }
            setLoading(false)
        }, 500)

        return () => clearTimeout(fetchData)
    }, [query, search])

    return {
        data,
        loading,
        search,
        setSearch,
    }
}
