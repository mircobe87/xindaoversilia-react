import styles from './article.module.css';

import fs from 'fs';
import path from 'path';
import Layout from "../../../components/layout/Layout";
import BoilerPlate from "../../../components/layout/BoilerPlate";
import Link from 'next/link';
import Image from 'next/image';
import ArticleMetadata from '../../../components/ArticleMetadata';
import Quote from '../../../components/Quote';

const metadata = "kungfu.json";
const articlesDirectory = path.join(process.cwd(), 'pages', 'blog', 'articles');

export async function getStaticProps() {
    let articleMetadataFilePath = path.join(articlesDirectory, metadata);
    let metadataFile = fs.readFileSync(articleMetadataFilePath);
    return {
        props: {
            id: metadata.replace(/\.json$/, ''),
            ...JSON.parse(metadataFile)
        }
    };
}

export default function ({title, description, date, cover, category}) {

    return (
        <Layout title={title} description={description}>
            <BoilerPlate>
                <div className={styles.articleContainer}>
                    <h1>{title}</h1>
                    <div className={styles.metadataContainer}><ArticleMetadata date={date} category={category}></ArticleMetadata></div>
                    <img src={cover} alt={cover}></img>
                    <p>
                        <strong>Kung Fu,</strong>&nbsp;<strong>Gong Fu</strong> o&nbsp;<strong>Wushu</strong>&nbsp;(ideogramma
                        cinese&nbsp;<span><strong>功夫</strong>)&nbsp;</span>è la parola con cui si intende <strong>l’insieme delle arti
                            marziali cinesi</strong>, nate in <strong>Cina</strong> migliaia di anni fa. Questo termine è di recente
                        utilizzo, infatti esistono molte parole con cui i <strong>cinesi</strong> fanno riferimento all’<strong>arte
                            marziale tradizionale cinese</strong>.
                    </p>
                    <p>
                        All’interno di questa pagina troverai le informazioni più importanti su questa affascinante <strong>disciplina
                            cinese</strong> praticata da migliaia di persone nel mondo: <strong>che cos’è il Kung Fu</strong> con le
                        definizioni dei vari vocaboli, la <strong>storia del Kung Fu</strong>, le varie tipologie,
                        l’<strong>allenamento</strong> e gli <strong>esercizi</strong> frequenti, così da comprendere gli step più
                        importanti per imparare questa disciplina millenaria.
                    </p>

                    <h2>Kung Fu: cos’è?</h2>
                    <Image src="/images/blog/gamuzza-linsheng.jpg" alt="kung-fu: cos'è?" width={452} height={480}/>
                    <p>
                        <strong>Cos’è il Kung Fu?</strong>
                    </p>
                    <p>
                        <strong>Kung Fu</strong> o <strong>Gong Fu</strong> (nell’articolo troverai entrambi i termini, uno scritto in
                        Wade Giles e uno in pinyn) è una parola che può essere tradotta con "<em>esercizio eseguito con abilità</em>" o
                        "<em>divenire abile con l’esercizio</em>". Per un cinese può significare anche "<em>tempo da impiegare in
                            qualche attività</em>".
                        </p>
                    <p>
                        Parlando di <b>Gong Fu</b> si intende quindi, la capacità di eseguire un compito o un lavoro grazie all’abilità
                        acquisita nel tempo con un notevole addestramento.
                    </p>
                    <p>
                        Non è molto chiaro il processo storico attraverso il quale si è giunti a usare questo termine per definire le <Link
                            href="https://www.kungfuscuolaxindao.it/elenco-arti-marziali-cinesi/"><strong>arti marziali cinesi</strong></Link>.
                        Con probabilità, l’origine va cercata nel sud della Cina, forse perché in un’epoca in cui non esistevano le armi da
                        fuoco conoscere la <strong>difesa personale</strong> diveniva un’abilità.
                    </p>
                    <p>
                        Aggiungiamo inoltre, che un’influenza determinante è stata data dai produttori cinematografici di Hong Kong, col loro
                        catalogare i <Link href="https://www.kungfuscuolaxindao.it/i-50-migliori-film-sulle-arti-marziali/"><strong>film di
                                arti marziali</strong></Link> come <em><strong>Cinema Kung Fu</strong></em> e con la diffusione dei film
                        di <strong>Bruce Lee</strong>.
                    </p>

                    <h2>Kung Fu: definizione e significato</h2>
                    <p>
                        <strong>Kung Fu</strong> è l’insieme delle <strong>arti marziali tradizionali cinesi</strong> ed è conosciuto con più <strong>definizioni</strong>:
                    </p>

                    <h3>Kung Fu</h3>
                    <Image src="/images/blog/ideogramma-kungfu.png" alt="kung fu" width={256} height={256}/>
                    <p>
                        <strong>Kung Fu</strong>: si tratta della parola che è stata utilizzata a partire dallo scorso
                        secolo soprattutto nel Cinema detto
                        appunto <em>Cinema <strong>Kungfu</strong></em> o <strong><em>Gong Fu</em></strong>.
                        Il <strong>termine Kung Fu</strong> è stato trascritto nel nostro alfabeto con il
                        metodo <em>Wade Giles</em> (che non è il metodo ufficiale della Repubblica Cinese).
                    </p>
                    <p>
                        <strong>Gong Fu</strong>: questo termine è come quello sopra, ma più corretto dal punto di
                        vista della traslitterazione perché si rifà alla scrittura <em>Pinyin</em> che è la scrittura
                        con le lettere latine che i cinesi utilizzano per semplificare la loro lingua (altrimenti
                        scritta in ideogrammi e comprensibile solo a chi conosce la lingua cinese).
                    </p>

                    <h3>Wushu</h3>
                    <Image src="/images/blog/ideogramma-wushu.png" alt="wushu" width={256} height={256}/>
                    <p>
                        <strong>Wushu</strong>: è il termine per definire l’<strong>arte marziale cinese</strong>.
                    </p>
                    <p><strong><em>Wu</em></strong> significa <strong><em>Guerra</em></strong></p>
                    <p><strong><em>Shu</em></strong> significa <strong><em>Arte</em></strong></p>
                    <p>Quindi <strong><em>Arte della Guerra</em></strong>.</p>
                    <p>
                        Oggi, anche se in modo improprio con il termine <strong>Wushu</strong> si
                        intende l’<strong>arte marziale moderna </strong>caratterizzata da tecniche
                        acrobatiche e ginniche a discapito dell’aspetto più applicativo e marziale.
                        Mentre, con la parola <strong>Kung Fu</strong> si intende
                        l’<strong>arte marziale cinese più tradizionale</strong>.
                    </p>

                    <h3>Guoshu</h3>
                    <Image src="/images/blog/ideogramma-guoshu.png" alt="guoshu" width={256} height={256}/>
                    <p>
                        <strong>Guoshu</strong>: in alcuni casi è stato utilizzato in modo più limitato
                        rispetto ai termini precedenti il termine <strong>Guoshu</strong> inteso
                        come <em><strong>Arte nazionale</strong></em> (Guo sta per Nazione o Paese,
                        mente Shu sta per Arte). Definizione ancora in utilizzo a Taiwan.
                    </p>

                    <p>
                        Maestro <Link href="/scuola/maestro_gamuzza/">Marco Gamuzza</Link>
                    </p>
                </div>
            </BoilerPlate>
        </Layout>
    );
}