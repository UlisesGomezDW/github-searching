import type { NextPage } from "next"
import Head from "src/components/common/head"
import RepositoriesScreen from "src/components/sections/repositories"

const Repositories: NextPage = () => {
    return (
        <>
            <Head title="Repositorios" description="Encuentra el repositorio que buscas" />
            <RepositoriesScreen />
        </>
    )
}

export default Repositories
