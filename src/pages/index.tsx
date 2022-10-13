import type { NextPage } from "next"
import Head from "src/components/common/head"
import Landing from "src/components/sections/landing"

const Home: NextPage = () => {
    return (
        <>
            <Head
                title="GitHub | Searching"
                description="GitHub - Searching, ofrece una experiencia única en la busqueda de usuarios y repositorios."
            />

            <Landing />
        </>
    )
}

export default Home
