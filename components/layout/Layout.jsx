import styles from './layout.module.css';

import Head from 'next/head';
import TitleBar from '../TitleBar';
import Footer from '../Footer';

export default function Layout({ children, title, description }) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content={description}></meta>
                <meta name="googlebot" content="notranslate"></meta>
                <meta name="robots" content="max-image-preview:standard, max-snippet:50"></meta>
                <meta property="og:title" content={title}></meta>
                <meta property="og:type" content="website"></meta>
                <title>{title}</title>
            </Head>
            <TitleBar/>
            <main>{children}</main>
            <Footer/>
        </div>
    );
}