import SearchLayout from "src/components/layout/search"
import { Skeleton } from "./index.styled"

function Repositories(): JSX.Element {
    return (
        <SearchLayout links={[{ name: "Usuarios", path: "/users" }]}>
            <Skeleton elements={5} />
        </SearchLayout>
    )
}

export default Repositories
