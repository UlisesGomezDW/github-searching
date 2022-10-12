import SearchLayout from "src/components/layout/search"
import { Skeleton } from "./index.styled"

function Users(): JSX.Element {
    return (
        <SearchLayout links={[{ name: "Repositorios", path: "/repositories" }]}>
            <Skeleton elements={5} />
        </SearchLayout>
    )
}

export default Users
