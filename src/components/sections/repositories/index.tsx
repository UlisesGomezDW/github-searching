import SearchLayout from "src/components/layout/search"
import Empty from "src/components/common/empty"
import { RespositoryCard } from "src/components/common/card"
import { useFetch } from "src/hooks/fetch"
import { Repository } from "src/types/data"
import { Skeleton, Content } from "./index.styled"

function Repositories(): JSX.Element {
    const { data, loading, search, setSearch } = useFetch("repositories")
    return (
        <SearchLayout
            value={search}
            onChange={(value) => setSearch(value)}
            links={[{ name: "Usuarios", path: "/users" }]}
        >
            {search ? (
                !loading ? (
                    data && data.length > 0 ? (
                        <Content>
                            {data.map(
                                (
                                    {
                                        full_name = "",
                                        description = "",
                                        html_url = "",
                                        stargazers_count = 0,
                                        topics = [],
                                        language = "",
                                        license,
                                    }: Repository,
                                    index
                                ) => (
                                    <RespositoryCard
                                        key={index}
                                        name={full_name}
                                        description={description}
                                        stars={stargazers_count}
                                        topics={topics}
                                        license={license?.name || ""}
                                        language={language}
                                    />
                                )
                            )}
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

export default Repositories
