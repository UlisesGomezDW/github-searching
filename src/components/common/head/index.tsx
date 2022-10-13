import Head from "next/head"
import { Props } from "./index.type"

const name = "Github Searching"
const site = "https://github.com"
const image = ""

function HeaderSEO(props: Props): JSX.Element {
    const { title = "", description = "" } = props
    return (
        <Head>
            <title>{title}</title>
            <meta name="application-name" content={name}></meta>
            <meta name="description" content={description}></meta>
            <meta
                name="subject"
                content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            ></meta>
            <meta name="google" content="notranslate"></meta>
            <meta name="rating" content="General"></meta>

            <link rel="me" href="mailto:hello@github.com"></link>

            <meta property="og:url" content={site} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={name} />
            <meta property="og:image" content={image} />
            <meta property="og:image:alt" content="github-img" />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={site} />
            <meta property="og:locale" content="en_US" />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@github" />
            <meta name="twitter:url" content={site} />
            <meta name="twitter:title" content={name} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:image:alt" content={"github-img"} />

            <meta name="pinterest" content={description} />
        </Head>
    )
}

export default HeaderSEO
