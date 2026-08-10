import { Helmet } from "react-helmet-async";

function SEO({
    title = "CodeFolio Portfolio",
    description = "Professional developer portfolio.",
    keywords = "",
    image = "",
    url = ""
}) {

    return (

        <Helmet>

            {/* Basic SEO */}
<meta
    name="viewport"
    content="width=device-width, initial-scale=1"
/>

<meta
    charSet="UTF-8"
/>

<meta
    name="theme-color"
    content="#2563eb"
/>
            <title>{title}</title>

            <meta
                name="description"
                content={description}
            />

            <meta
                name="keywords"
                content={keywords}
            />

          <meta
    name="author"
    content="CodeFolio"
/>

            <meta
                name="robots"
                content="index, follow"
            />

            <link
                rel="canonical"
                href={url}
            />

            {/* Open Graph */}

<meta
    property="og:locale"
    content="en_US"
/>

            <meta
                property="og:type"
                content="website"
            />

            <meta
                property="og:title"
                content={title}
            />

            <meta
                property="og:description"
                content={description}
            />

            {image && (

<meta
    property="og:image"
    content={image}
/>

)}

            <meta
                property="og:url"
                content={url}
            />

            <meta
                property="og:site_name"
                content="CodeFolio"
            />

            {/* Twitter */}

            <meta
                name="twitter:card"
                content="summary_large_image"
            />

            <meta
                name="twitter:title"
                content={title}
            />

            <meta
                name="twitter:description"
                content={description}
            />

            {image && (

<meta
    property="twitter:image"
    content={image}
/>

)}

        </Helmet>

    );

}

export default SEO;