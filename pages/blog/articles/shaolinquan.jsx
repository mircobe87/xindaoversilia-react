import styles from './article.module.css';

import fs from 'fs';
import path from 'path';
import Layout from "../../../components/layout/Layout";
import BoilerPlate from "../../../components/layout/BoilerPlate";
import Link from 'next/link';
import Image from 'next/image';
import ArticleMetadata from '../../../components/ArticleMetadata';

const metadata = "shaolinquan.json";
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
                        <strong>Shaolin</strong> è il termine con cui si identificano 3 elementi: l’<strong>insieme degli stili esterni
                        delle <Link href="https://www.kungfuscuolaxindao.it/elenco-arti-marziali-cinesi/">arti marziali cinesi</Link></strong> (alveo Shaolin)
                        che convidiono elementi comuni, lo <strong>stile di Kung Fu</strong>, il <strong>tempio</strong> sulle
                        montagne del Song Shan nel nord della Cina.
                    </p>
                    <p>Vediamo insieme nel dettaglio il suo significato, il fondatore, gli stili e la storia dei templi.</p>

                    <h2>Che cos'è Shaolin?</h2>
                    <Image src="/images/blog/shaolin_tempio.jpg" width={480} height={320} alt="tempio shaolin"/>
                    <p>
                        <strong>Shaolin Quan</strong>, letteralmente <em>pugilato/pugno della giovane foresta</em>, è uno stile
                        di <Link href="https://www.kungfuscuolaxindao.it/kung-fu/"><strong>Kung Fu</strong></Link> a mani nude o
                        con armi, praticato tradizionalmente dai <strong>monaci Shaolin</strong>; esso è il più importante tra
                        gli stili cosiddetti Wai Jia (stili esterni delle <strong>arti marziali cinesi</strong>) e questo è il
                        motivo per cui il nostro <strong><Link href="https://www.kungfuscuolaxindao.it/corsi-kung-fu/corso-kung-fu-adulti/" target="_blank" rel="noopener noreferrer">
                        Corso di Shaolin a Milano</Link></strong> rappresenta la base per tutti gli studenti che si approcciano
                        all’<strong>arte marziale.</strong>
                    </p>
                    <p>
                        Secondo molti, oltre a essere lo stile più antico, è il progenitore di tutte le <strong>arti marziali
                        asiatiche</strong>, avendone influenzato in maniera diretta o indiretta lo sviluppo. Chiamato
                        spesso <strong>Shaolin Kung Fu</strong> al suo interno racchiude centinaia di "sotto-stili".
                        Infatti, questo, non è un singolo stile, ma un <strong>insieme di stili</strong>, i quali sono
                        caratterizzati da una comune provenienza geografica.
                    </p>
                    <p>
                        L’alveo <strong>Shaolin</strong> deve il suo nome al
                        famoso <Link href="https://www.kungfuscuolaxindao.it/dove-e-nato-il-kung-fu/"><strong>tempio Shaolin</strong></Link>,
                        chiamato <strong>Shaolinsi</strong> (少林寺) che sorge sul monte Song Shan nella <strong>Cina settentrionale</strong> (Henan),
                        eremo che in antichità era ritenuto dai taoisti l’asse della terra, posto appena al di sotto del cielo.
                        Il tempio, casa dei <strong>monaci Shaolin</strong>, oltre a essere il luogo d’origine
                        del <Link href="https://www.kungfuscuolaxindao.it/kung-fu/"><strong>Kung Fu</strong></Link>, è il luogo
                        in cui è nato il <strong>Buddismo chan</strong> (maggiormente conosciuto nella corrente giapponese definita <strong><em>zen</em></strong>).
                    </p>

                    <h2>Chi è il fondatore dello Shaolin?</h2>
                    <Image src="/images/blog/bodhidharma.jpg" width={480} height={320} alt="Bodhidharma"/>
                    <p>
                        Il modo in cui quest’<strong>arte marziale cinese </strong>sia nata non è ancora chiaro oggi. Esistono moltissime
                        ipotesi sulle radici di&nbsp;questa disciplina, tuttavia la più diffusa è quella che fa riferimento al monaco
                        indiano <Link href="/blog/articles/bodhidharma/"><strong>Bodhidharma</strong></Link> (<em>Da Mo</em> in
                        cinese).
                    </p>
                    <p>
                        <b>Bodhidharma</b> nel V secolo d.C., giungendo al tempio per insegnare la dottrina buddista, si accorse che i
                        monaci soffrivano le lunghe sedute di meditazione e la lettura dei sutra. Iniziò così a insegnare alcune
                        <strong>tecniche di pugni </strong>e <strong>calci</strong> per <strong>migliorare la salute fisica</strong> e
                        inframmezzare le lunghe ore d’immobilità. Nonostante sia plausibile credere che esistessero delle forme di
                        <strong>arti marziali primitive</strong>, Da Mo, notò che erano lontane dall’essere un <strong>sistema di
                            lotta</strong> integrale: egli dunque diede loro uno spirito nuovo, finalizzandole soprattutto allo
                        <strong>sviluppo armonico del corpo e della mente</strong>, organizzandole in un sistema in cui la <strong>tecnica
                            marziale</strong> fosse al servizio dello spirito. Questo primo nucleo di <strong>esercizi Shaolin Kung
                            Fu</strong> fu poi sviluppato e perfezionato dalle numerose generazioni di monaci che nei secoli si sono
                        susseguite fino ai nostri giorni. La loro abilità divenne formidabile, facendosi ben presto conoscere in tutta la
                        Cina.
                    </p>
                    <h3>Le caratteristiche di Shaolin</h3>
                    <Image src="/images/blog/posing_statues.jpg" width={480} height={320} alt="Monaci Shaolin"/>
                    <p>
                        Gli <strong>stili Shaolin</strong> sono ancora oggi in evoluzione: anche all’esterno del tempio Shaolin le tecniche
                        moderne mantengono l’impronta del <strong>Buddismo Zen</strong>, ossia la mente concentrata sul movimento,
                        <strong>attacchi rapidi e scontri duri</strong>, spostamenti lineari e forme spesso molto articolate, nonché uno
                        <strong>Shen Fa</strong> ("armonia raffinata") che richiede grande controllo ed equilibrio, spostamenti agili e
                        <strong>mantenimento di posizioni statiche</strong>, lavoro sull’<Link
                            href="https://www.kungfuscuolaxindao.it/energia-vitale/"><strong>energia</strong></Link>.
                    </p>
                    <p>
                        Molti sono gli stili/forme di <strong>Kung Fu Shaolin</strong> che si riconducono all’<strong>alveo dello
                            Shaolin</strong>, come: Pao Quan, Ba Fa Quan, Tong Bei Quan, Tang Lang Quan, per citarne alcuni studiati nel
                        nostro corso.
                    </p>
                    <h3>Stili Shaolin</h3>
                    <Image src="/images/blog/pagoda_shaolin.jpg" width={480} height={320} alt="Pagoda Shaolin"/>
                    <p>
                        Si può distinguere e parlare di due <strong>stili di Shaolin</strong>: uno del Nord e uno del Sud.
                        Questa distinzione è dovuta alle diverse origini geografiche. Lo <strong>Shaolin del Nord</strong> è quello
                        originario del Tempio di Shaolinsi, dell’Henan, invece quello del Sud è originario del Tempio di Nan
                        Shaolinsi, nel Fujian. Si ritiene che lo <strong>stile di Shaolin del Nord</strong> prediliga un maggior
                        uso delle gambe mentre lo <strong>stile Shaolin del Sud</strong> fonda la maggior parte delle tecniche sull’uso
                        del pugno e degli arti superiori. Questa tesi, che ben si adatta a molti stili presenti nelle due aree geografiche,
                        in realtà non è completamente vera, essa si poggia sostanzialmente sull’aforisma di
                        Nanquan Beitui: <strong><em>Pugni al sud e gambe al nord</em></strong>.
                    </p>

                    <h2>La storia dei Templi Shaolin</h2>
                    <Image src="/images/blog/temple_structure.jpg" width={480} height={320} alt="Tempio Shaolin"/>
                    <p>
                        La storia dei <strong>templi Shaolin</strong> è lunga e caratterizzata da molti elementi storici, di cui spesso
                        purtroppo non abbiamo documentazione scritta.
                    </p>
                    <p>
                        Il <strong>tempio&nbsp;del Nord</strong>, nel corso dei secoli, ha superato numerosi momenti di difficoltà dovuti
                        alle guerre e ai dissidi con i governi centrali.
                    </p>
                    <p>
                        Si ritiene che il <strong>tempio del Sud</strong> nel Fujian sia stato distrutto nel 1736 da parte della popolazione
                        Manchu, causando la diaspora dei monaci sopravvissuti, l’ulteriore diffusione e la frammentazione di conoscenze e
                        stili.
                    </p>
                    <p>
                        Durante le dispute tra i "Signori della guerra", nel <strong>1928</strong>, il <strong>tempio del nord</strong> Henan
                        insieme ai suoi archivi fu bruciato; fortunatamente i <strong>monaci</strong>&nbsp;misero in salvo delle copie dei
                        manoscritti. Anche i giapponesi, che conquistarono l’Henan nel <strong>1944</strong> distrussero importanti resti
                        storici del Tempio.
                    </p>
                    <p>
                        Come se non bastasse negli anni '60, il tempio fu oggetto di degrado da parte delle guardie rosse; il tempio fu
                        dissacrato e chiuso.
                    </p>
                    <p>
                        Nel 1980 dopo la morte di <strong>Mao Zedong</strong> nell’intento di una rivalorizzazione delle <strong>tradizioni
                            cinesi</strong>, le autorità di Pechino riaprirono il tempio: i nuovi dirigenti governativi si resero conto che
                        il <strong>Kung Fu Shaolin</strong> era un patrimonio d’inestimabile valore. Le <strong>arti marziali
                            cinesi</strong> furono così riabilitate, in particolare nella forma del <strong>Wushu moderno</strong>,
                        <strong>versione sportiva del Kung Fu tradizionale</strong>, con l’intento di renderla una disciplina olimpica.
                    </p>
                    <p>
                        Oggi la <strong>cultura Shaolin</strong> è stata riconosciuta dall’Unesco come "<Link
                            href="http://viaggi.excite.it/cina-il-tempio-shaolin-e-ora-patrimonio-unesco-N49863.html" target="_blank"
                            rel="noopener noreferrer">Patrimonio culturale dell’umanità</Link>".
                    </p>
                    <p>
                        Scopri lo <strong>Shaolin</strong>&nbsp;presso la nostra <Link
                            href="/scuola/xin_dao"><strong>Scuola di Kung Fu Xin Dao</strong></Link>,
                        prenota la tua lezione gratuita.
                    </p>
                    <p>
                        Maestro <Link href="/scuola/maestro_gamuzza/">Marco Gamuzza</Link>
                    </p>
                </div>
            </BoilerPlate>
        </Layout>
    );
}