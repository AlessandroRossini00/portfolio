import AboutMe from "./components/AboutMe";
import CardList from "./components/CardList";
import Social from "./components/Social";

import Head from "next/head";
export default function About() {
    return (
        <div>
            <Head>
                <title>Portfolio di [Il tuo nome]</title>
                <meta
                    name="description"
                    content="Scopri il mio lavoro, i miei progetti e connettiti con me."
                />
                <meta property="og:title" content="Portfolio di [Il tuo nome]" />
                <meta
                    property="og:description"
                    content="Esplora i miei progetti e connettiti con me."
                />
                <meta property="og:image" content="/images/og-image.jpg" />
                <meta property="og:url" content="https://example.com/about" />
            </Head>
            <main className="py-8 flex flex-col bg-blue-700">
                <AboutMe />
                <Social />
                <CardList />
            </main>
            <footer></footer>
        </div>
    );
}