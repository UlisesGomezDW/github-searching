import SearchLayout from "src/components/layout/search"
import Empty from "src/components/common/empty"
import { UserCard } from "src/components/common/card"
import { useFetch } from "src/hooks/fetch"
import { User } from "src/types/data"
import { Skeleton, Content } from "./index.styled"

function Users(): JSX.Element {
    const { data, loading, search, setSearch } = useFetch("users")

    return (
        <SearchLayout
            value={search}
            onChange={(value) => setSearch(value)}
            links={[{ name: "Repositorios", path: "/repositories" }]}
        >
            {search ? (
                !loading ? (
                    data && data.length > 0 ? (
                        <Content>
                            {data.map(({ login = "", avatar_url = "", html_url = "" }: User, index) => (
                                <UserCard key={index} name={login} description={html_url} image={avatar_url} />
                            ))}
                        </Content>
                    ) : (
                        <Empty
                            title={`No encontramos resultados para ”${search}”`}
                            description={"Intenta nuevamente o verifica la información."}
                            image="png/not-found.png"
                        />
                    )
                ) : (
                    <Skeleton elements={5} />
                )
            ) : (
                <Empty title={"¿Qué vamos a buscar hoy?"} description={""} image="png/empty.png" />
            )}
        </SearchLayout>
    )
}

export default Users
