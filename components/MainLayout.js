import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export function MainLayout({children, title = 'MANHETTAN'}) {
    return (
        <>
            <Head>
                <title>{title} | MANHETTAN</title>
                <meta name="keywords" content="next, javascript"/>
                <meta name="description" content="next, javascript"/>
                {<meta charSet="utf-8"/>}
            </Head>
            <Header/>
            
            <main>
                {children}
            </main>
            
            <Footer/>
            
        </>
    )    
};
