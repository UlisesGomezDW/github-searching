import type { NextPage } from "next"
import Head from "src/components/common/head"
import Empty from "src/components/layout/empty-screen"

const Error: NextPage = ({ status = 400 }: any) => {
    return (
        <>
            <Head title={`Error ${status}`} description="Página no encontrada" />
            <Empty title={`${status}`} description="Tenemos un problema, pero ya casi volvemos." />
        </>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const status = res ? res.statusCode : err ? err.statusCode : 404
    return { status }
}

export default Error
