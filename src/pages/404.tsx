import type { NextPage } from "next"
import Head from "src/components/common/head"
import Empty from "src/components/layout/empty-screen"

const Error404: NextPage = () => {
    return (
        <>
            <Head title="Error 404" description="Página no encontrada" />
            <Empty title="404" description="Página no encontrada" />
        </>
    )
}

export default Error404
