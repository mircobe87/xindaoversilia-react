import styles from './article.module.css';

import fs from 'fs';
import path from 'path';
import Layout from "../../../components/layout/Layout";
import BoilerPlate from "../../../components/layout/BoilerPlate";
import Link from 'next/link';
import Image from 'next/image';
import ArticleMetadata from '../../../components/ArticleMetadata';
import Quote from '../../../components/Quote';

const metadata = "dove_nato_kungfu.json";
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
                    <h2>7 Luoghi delle Origini e della Diffusione del Kung Fu</h2>
                    <p>
                        Tra gli appassionati di <Link href="/blog/articles/kungfu"><strong>arti marziali cinesi</strong></Link> i luoghi
                        in cui hanno avuto origine i principali stili di <Link href="/blog/articles/kungfu">
                        <strong>Kung Fu</strong></Link> suscitano da sempre un grande fascino. Esistono luoghi noti come
                        il <strong>Tempio Shaolin</strong> sulle montagna della catena Songshan, nel nord della Cina (provincia dello
                        Henan) e il <strong>Monastero Wudang</strong> nella provincia dell’Hubei, mentre altri sono rimasti nell'ombra a
                        causa delle poche testimonianze scritte che abbiamo a disposizione.
                    </p>
                    <p>
                        Quel che è certo è che all’interno della cultura orientale e nello specifico cinese, la montagna, ha sempre
                        rivestito un ruolo importante nella vita religiosa e spirituale della comunità.
                    </p>
                    <p>
                        Il <strong>Buddhismo Chan</strong> (conosciuto in giappone come Zen) vede la sua diffusione in Cina proprio
                        all’interno del Monastero Shaolin, dove la leggenda narra che un monaco che venne dall’India di
                        nome <Link href="/blog/articles/bodhidharma"><strong>Bodhidharma</strong></Link> lo diffuse intorno al V secolo d.C.
                    </p>
                    <p>
                        In questa guida rispondiamo ad una delle domande più diffuse tra i marzialisti alle prime armi "<strong><em>dove
                        è nato il Kung Fu?</em></strong>", vediamo quali sono i <strong>luoghi principali in cui è nato e si è diffuso
                        il Kung Fu</strong> partendo da quelli più noti fino a quelli meno conosciuti.
                    </p>

                    <h3>1. Tempio Shaolin del nord</h3>
                    <Image src="/images/blog/tempio-shaolin.jpg" alt="Tempio Shaolin" width={480} height={320}/>
                    <p>
                        Situato a nord della Cina nella provincia dello <strong>Henan</strong>, all’interno della catena montuosa
                        del Songshang sul monte Shaoshi, il <strong>tempio Shaolin</strong> venne fatto costruire dall’imperatore
                        Xiaowen nel V secolo e fu un importante centro di traduzione dei <strong>testi buddhisti</strong> scritti
                        in sanscrito. Solo nella seconda metà del V secolo con l’arrivo del
                        monaco <Link href="/blog/articles/bodhidharma"><strong>Bodhidharma</strong></Link> il tempio divenne il
                        centro della famiglia di stili chiamata <Link href="/blog/articles/shaolinquan"><strong>Shaolin</strong></Link>.
                    </p>
                    <p>
                        Con l’arrivo di <Link href="/blog/articles/bodhidharma"><strong>Bodhidharma</strong></Link> i monaci
                        appresero tutta una serie di esercizi che avevano l’obiettivo di migliorare la loro condizione fisica,
                        costituendo così la prima impalcatura dello <strong>stile Shaolin</strong>.</p><p>Oggi, il <strong>tempio
                        Shaolin</strong> è meta di numerosi turisti e appassionati che lo visitano ed è entrato a far parte
                        dell’UNESCO come patrimonio dell’umanità.
                    </p>

                    <h3>2. Montagne del Wudang</h3>
                    <Image src="/images/blog/montagne-wudang.jpg" alt="Montagne Wudang" width={480} height={320}/>
                    <p>
                        Il Complesso di templi sulle <strong>montagne del Wudang</strong> è secondo luogo più importante per la
                        nascita del <strong>Kung Fu cinese interno</strong>, chiamato <strong>Neija</strong>, è il complesso di
                        templi che si trova sulle montagne del Wudang. Da questo luogo sarebbe nato lo
                        stile <a href="https://www.kungfuscuolaxindao.it/tai-chi-quan/"><strong>Tai Chi Quan</strong></a> attribuito
                        al monaco taoista Zhang Sanfeng, una figura storico-leggendaria, esperto di arti marziali, medicina
                        cinese e agopuntura.
                    </p>
                    <p>
                        Questa struttura composta da più monasteri ebbe la sua massima sontuosità durante la Dinastia Ming, periodo
                        durante il quale gli imperatori associarono la dinastia al Taoismo per legittimare il loro potere.
                    </p>
                    <p>
                        <strong>CURIOSITÀ</strong>: <em>Wudang</em> significa <strong><em>praticare il Kung Fu raggiungendo l’immortalità</em></strong>
                    </p>

                    <h3>3. Monte Emei</h3>
                    <Image src="/images/blog/monte-emei.jpg" alt="Monte Emei" width={480} height={320}/>
                    <p>
                        Si tratta del Monte probabilmente più affascinante per il paesaggio e la vista suggestivi, nella parte
                        frontale si erge <strong>la statua più grande dedicata a Buddha</strong> e un fiume che attraversa la
                        montagna. Letteralmente <strong><em>Emei</em></strong> significa <strong><em>Montagna del Sopracciglio
                        Delicato</em></strong> e la montagna rappresenta uno dei luoghi sacri della tradizione cinese sia per
                        i buddhisti che per i taoisti. Dal 1996 anche questo monte è luogo riconosciuto come patrimonio dell’umanità
                        e rappresenta un altro importante centro per la diffusione del Kung Fu, da qui nasce la branca
                        degli <strong>stili Emei Quan</strong>.
                    </p>

                    <h3>4. Villaggio Chen</h3>
                    <Image src="/images/blog/villaggio-chen.jpg" alt="Villaggio Chen" width={480} height={320}/>
                    <p>
                        Secondo le fonti storiche il <strong>Villaggio Chen</strong> situato nella provincia dello Henan sarebbe
                        il luogo di nascita dello stile più antico di Tai Chi: il <strong>Tai Chi stile Chen</strong>.
                    </p>
                    <p>
                        Si racconta che questo stile nacque da un famoso generale del periodo della dinastia Ming, chiamato Chen
                        Wangting. La leggenda narra che imparò il <strong>Tai Chi</strong> da un discepolo di <strong>Zhang
                        Sanfeng</strong>, famoso Maestro e personaggio leggendario.
                    </p>
                    <p>
                        Oggi il <strong>Tai Chi</strong> è uno degli stili più praticati e diffusi nel mondo grazie alla sua
                        straordinaria efficacia marziale e come metodo per il benessere personale.
                    </p>

                    <h3>5. Pechino</h3>
                    <Image src="/images/blog/pechino.jpg" alt="Pechino" width={480} height={320}/>
                    <p>
                        La <strong>capitale cinese</strong> è stata negli anni centro di attività culturali ed economiche e molti
                        Occidentali si sono stabiliti in città per lavoro e per imparare la lingua cinese che è divenuta una delle
                        più diffuse al mondo. Avendo una concentrazione di cultura sicuramente è una città molto importante anche
                        per le <strong>arti marziali cinesi</strong>, numerose sono le scuole presenti in cui è possibile praticare
                        il <strong>Kung Fu</strong>, se ne contano a migliaia. Si può dire che in qualche modo l’arte marziale
                        moderna (più ginnica) al momento sia maggiormente diffusa, infatti è proprio a <strong>Pechino</strong> che
                        si disputano diverse importanti gare di <strong>Wushu</strong>.
                    </p>

                    <h3>6. Hebei</h3>
                    <Image src="/images/blog/hebei.jpg" alt="Hebei" width={480} height={320}/>
                    <p>
                        Luogo di grande importanza storico-culturale, infatti qui si trovano molti resti archeologici, i più antichi
                        risalgono a 700.000 anni fa. Questa zona fu protagonista di numerose battaglie a partire dal periodo dei
                        regni combattenti (453 a.C. - 221 d.C.) e divenne un importante centro per la diffusione
                        del <strong>combattimento</strong> e dell’<strong>autodifesa</strong>. Ancora oggi molti turisti e appassionati
                        si recano presso i templi dei monaci guerrieri dell’Hebei per imparare <strong>tecniche di Kung Fu
                        tradizionale</strong>di questa zona.
                    </p>

                    <h3>7. Monte Hua</h3>
                    <Image src="/images/blog/monte-hua-cina.jpg" alt="Monte Hua Cina" width={480} height={320}/>
                    <p>
                        Il <strong>Monte Hua</strong> si trova nella provincia dello Shanxi ed è legato a diverse storie e leggende,
                        rendendolo meta di numerosi pellegrini che scalano le sue ripide vette. Secondo la leggenda su questa montagna
                        nacque lo stile Huanquan che ha influenzato tutte le arti marziali cinesi fino ai giorni nostri, tanto che molte
                        tecniche di pugno derivano da qui.
                    </p>

                    <h2>Conclusioni</h2>
                    <p>
                        Dal <strong>tempio Shaolin</strong> a Pechino, fino al Monte Hua hai visto quali sono i luoghi simbolo della
                        nascita e diffusione del Kung Fu. La <strong>Cina</strong> è da sempre la protagonista indiscussa
                        delle <Link href="/blog/articles/arti_marziali"><strong>arti marziali</strong></Link> nell’antichità
                        ma anche nell’era contemporanea, erede di un fascino millenario che non smetterà mai di attrarre
                        appassionati di tutto il mondo.
                    </p>

                    <p>
                        Maestro <Link href="/scuola/maestro_gamuzza/">Marco Gamuzza</Link>
                    </p>
                </div>
            </BoilerPlate>
        </Layout>
    );
}