import type { NextPage } from "next"
import Head from "src/components/common/head"
import Empty from "src/components/layout/empty-screen"

const Error500: NextPage = () => {
    return (
        <>
            <Head title="Error 500" description="Tenemos un problema, pero ya casi volvemos." />
            <Empty title="500" description="Tenemos un problema, pero ya casi volvemos." />
        </>
    )
}

export default Error500
