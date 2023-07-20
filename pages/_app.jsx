import '../styles/global.css';
import { Noto_Sans_Display } from 'next/font/google';

const lato = Noto_Sans_Display({subsets: ['latin']});

export default function App({ Component, pageProps }) {
    return (
        <>
            <style jsx global>{`
                html {
                    font-family: ${lato.style.fontFamily};
                }
            `}</style>
            <Component {...pageProps} />
        </>
    );
}