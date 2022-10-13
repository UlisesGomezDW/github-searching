import type { NextPage } from "next"
import Head from "src/components/common/head"
import UsersScreen from "src/components/sections/users"

const Users: NextPage = () => {
    return (
        <>
            <Head title="Usuarios" description="Encuentra el perfil que buscas" />

            <UsersScreen />
        </>
    )
}

export default Users
