import styles from './article.module.css';

import fs from 'fs';
import path from 'path';
import Layout from "../../../components/layout/Layout";
import BoilerPlate from "../../../components/layout/BoilerPlate";
import Link from 'next/link';
import Image from 'next/image';
import ArticleMetadata from '../../../components/ArticleMetadata';
import Quote from '../../../components/Quote';

const metadata = "bodhidharma.json";
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
                        <strong>Bodhidharma</strong> è un personaggio avvolto dalla leggenda, colui che secondo la tradizione
                        scritta e orale <strong>cinese</strong> sarebbe sia il fondatore del <strong>Buddismo Chan</strong> in
                        Cina e il <strong>fondatore del <Link href="https://www.kungfuscuolaxindao.it/kung-fu/">Kung Fu</Link></strong> o
                        ancora meglio precisare del primo nucleo di <Link href="https://www.kungfuscuolaxindao.it/che-cose-lo-shaolin/">
                        <strong>tecniche dello stile Shaolin</strong></Link>.
                    </p>
                    <p>
                        In questo articolo percorreremo insieme gli aspetti più importanti della sua vita, i testi che ne raccontano
                        le gesta e i suoi contributi sia al <strong>Buddismo</strong> che
                        alle <Link href="https://www.kungfuscuolaxindao.it/elenco-arti-marziali-cinesi/"><strong>arti marziali
                        cinesi</strong></Link>.
                    </p>

                    <h2>Bodhidharma: il fondatore del Kung Fu?</h2>
                    <Image src="/images/blog/vita-di-bodhidharma.jpg" alt="Statua di Budhidharma" width={480} height={320}/>
                    <p>
                        Quando si parla della nascita delle prime di tecniche di arti marziali cinesi è importante ricordare che il luogo
                        fondamentale da cui tutto partì fu il <strong>Tempio Shaolin</strong> del Nord (Henan). Diverse sono le storie
                        legate alla fondazione del tempio buddista, secondo quella più autorevole e attendibile un <strong>monaco</strong>
                        prima di Bodhidharma, chiamato <strong>Batuo</strong> o <strong>Buddhabadra</strong>, ebbe un ruolo fondamentale ed
                        è proprio a lui che si deve la costruzione del Tempio.
                    </p>
                    <p>
                        Le storie spiegano che <strong>Batuo</strong> giunse in <strong>Cina</strong> intorno al 480 d.C. insieme ad altri 5
                        monaci con l’obiettivo di diffondere i principi del Buddhismo. Secondo la storia, Batuo si isolò e raggiunse
                        l’illuminazione sui monti del Song shang, nel nord del Cina. Nel 495 d.C. l’imperatore Xiao Wen fece costruire in
                        suo onore il <strong>Tempio Shaolin</strong> del Nord.
                    </p>
                    <p>
                        Negli annali del <strong>Monte Shaolin</strong> si fa riferimento a <strong>Batuo</strong> come il primo monaco che
                        permise oltre alla trasmissione del <strong>Buddismo</strong> anche quella delle arti marziali, in particolare si
                        racconta che due suoi discepoli <strong>Gui Gang</strong> e <strong>Seng Chou</strong> divennero esperti.
                    </p>
                    <p>
                        Da questo deduciamo che i personaggi ad avere avuto un ruolo fondamentale nella diffusione del
                        <strong>Buddismo</strong> e delle prime forme di arti marziali cinesi siano stati diversi.
                    </p>

                    <h2>Bodhidharma: la storia</h2>
                    <p>
                        Secondo i testi storici, <strong>Bodhidharma</strong> (prima della vita monastica <strong>Bodhitara</strong>) nasce
                        in Iran (antica Persia) intorno al 483 d.C. da una nobile casata che intorno al II secolo aveva conquistato gran
                        parte dei territori del Tagikistan, dell’Afghanistan fino alla valle del Gange.
                    </p>
                    <p>
                        <strong>Bodhidharma</strong> era il figlio del <strong>re Sugandha</strong> sovrano del piccolo regno della dinastia
                        Syandria (sud dell’India) e terzogenito della famiglia. All’epoca l’India si trovava in una situazione instabile dal
                        punto di vista politico, ecco perché i figli dei sovrani e delle casate nobili avevano un’educazione spirituale e
                        militare caratterizzata dall’utilizzo di tecniche di combattimento, l’insieme di queste tecniche formava il metodo
                        del <strong>Kalari-Payat</strong>.
                    </p>
                    <p>
                        Così come in Occidente la Chiesa ebbe un ruolo primario nel custodire e tramandare il sapere, il
                        <strong>Buddismo</strong> ebbe un ruolo primario nell’istruzione, proprio per questo motivo spesso i figli venivano
                        affidati ai <strong>Maestri spirituali</strong> che erano per lo più <strong>monaci buddisti.</strong>
                    </p>
                    <p>
                        Fin da bambino egli entrò all’interno di un tempio buddista in cui seguì il <Link
                            href="https://en.wikipedia.org/wiki/Prajnatara" target="_blank" rel="noopener noreferrer"><strong>Maestro
                                Prajnatara</strong></Link> (scuola Sarvasti-vada <em>realtà esistenziale</em>) ricevendo così il nome
                        spirituale di <strong>Bodhidharma</strong>.
                    </p>

                    <h3>Bodhidharma: periodo in Cina</h3>
                    <p>
                        In base ai resoconti fu proprio il suo Maestro a indicargli di andare in <strong>Cina</strong>, dove in seguito ad un
                        lungo viaggio di 3 anni in mare arrivò a Guang-Zhou nel sud della Cina, attorno al 515 d.C.
                    </p>
                    <p>
                        L’imperatore dell’epoca Liang-Wu-Di accolse Bodhidharma, ma per via delle differenti vedute spirituali - l’imperatore
                        seguiva la corrente del <strong>Buddismo <Link href="https://it.wikipedia.org/wiki/H%C4%ABnay%C4%81na" target="_blank"
                                rel="noopener noreferrer">Hinayana</Link></strong>, mentre <strong>Bodhidharma</strong> quella <strong>Mahayana</strong> - si allontanò ben presto trasferendosi al nord della Cina.
                    </p>
                    <p>
                        Si narra che nel nord della Cina, sulle <strong>montagne del Song Shang</strong> il Maestro meditò per 9 lunghi anni
                        all’interno di una grotta con il viso rivolto verso la parete, tanto che oggi nella stessa è rimasta impressa
                        l’ombra del suo volto.
                    </p>
                    <p>
                        Proprio qui entrò in contatto con i <strong>monaci buddisti</strong> del <strong>tempio Shaolin</strong> che si
                        dedicavano per l’intera giornata alla traduzione dei testi buddisti dal sanscrito al cinese, nei racconti si parla
                        soprattutto di due monaci che si avvicinarono al Maestro Bodhidharma: Tao-Yih e Shen-Guang.
                    </p>
                    <p>
                        Negli anni successivi <strong>Bodhidharma</strong> insegnò ai monaci del tempio come seguire uno stile di vita sano:
                        praticare la meditazione ogni giorno, eseguire esercizi fisici e mangiare in modo regolare. I discepoli cinesi lo
                        soprannominarono <em>Damo</em> e grazie ai suoi insegnamenti impararono <strong>la Via della saggezza e
                            dell’Illuminazione</strong>.
                    </p>

                    <h2>I testi storici</h2>
                    <Image src="/images/blog/libri-bodhidharma.jpg" width={480} height={320} alt="Libri di Bodhidharma"/>
                    <p>
                        I testi storici che ci raccontano <strong>la vita di Bodhidharma o Damo</strong> sono diversi, ma non abbiamo
                        certezza che ognuno di questi abbia informazioni sicure, come spesso accade con i testi antichi.
                    </p>
                    <p>
                        Ecco alcuni libri che ci parlano della <strong>vita di Damo</strong>:
                    </p>
                    <ul>
                        <li>
                            <strong>Il registro dei monasteri buddisti di Luoyang</strong>, scritto nel 547 dallo scrittore Yáng Xuànzhī:
                        </li>
                    </ul>
                    <p>
                        <em>
                            A quel tempo c’era un monaco della regione occidentale di nome Bodhidharma, un centroasiatico persiano. Ha
                            viaggiato dai confini selvaggi alla Cina. Vedendo i dischi dorati sul palo in cima allo stupa di Yǒngníng che si
                            riflettono nel sole, i raggi di luce illuminano la superficie delle nuvole, le campane gioiello sullo stupa che
                            soffia nel vento, gli echi che riverberano oltre il cielo, cantava le sue lodi. Ha esclamato: “Davvero questo è
                            il lavoro degli spiriti”. Ha detto: “Ho 150 anni e ho attraversato numerosi paesi. Non c’è praticamente nessun
                            paese che non abbia mai visitato. Persino i lontani regni di Buddha mancano di questo”. Cantò in omaggio e mise
                            i suoi palmi in segno di saluto per giorni e giorni.
                        </em>
                    </p>
                    <ul>
                        <li>
                            <strong><em>Il Lungo Rotolo del Trattato dei Due Accessi e delle Quattro Pratiche</em></strong> di Tanlin
                            (secondo molto questo testo fu scritto dallo stesso Bodhidharma):
                        </li>
                    </ul>
                    <p>
                        <em>
                            Il Maestro del Dharma era un indiano del sud della regione occidentale. Era il terzo figlio di un grande re
                            indiano. La sua ambizione risiedeva nel sentiero Mahayana, e così mise da parte la veste del suo laico bianco
                            per la veste nera di un monaco […] Lamentava il declino del vero insegnamento nelle terre esterne,
                            successivamente attraversò montagne e mari lontani, viaggiando per propagare l’insegnamento in Han e Wei.
                        </em>
                    </p>
                    <ul>
                        <li>
                            <strong><em>Ulteriori biografie di eminenti monaci</em></strong> di Daoxuan, in cui si fa riferimento a
                            Bodhidharma come un bramano (una delle caste più importanti in India).
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <strong><em>Raccolta della trasmissione della lampada</em></strong> di Daoyuan, del 1004 d.C. quindi diverso
                            tempo dopo rispetto alla vita di Bodhidharma, ma oggi considerato il testo storico più attendibile riguardo alla
                            sua storia.
                        </li>
                    </ul>

                    <h2>Bodhidharma: la fondazione del Buddismo Chan (in giapponese <em>Zen</em>)</h2>
                    <p>
                        Il <strong>Buddismo Chan</strong> nasce in <strong>Cina</strong>, secondo gli scritti il fondatore fu proprio
                        <strong>Bodhidharma</strong> e il termine Chan proviene da <em>dhyana</em>, che in lingua indiana significa
                        <strong>meditazione</strong>.
                    </p>
                    <p>
                        Partiamo dal presupposto che la <strong>natura del Buddha</strong> è pura e saggia e l’obiettivo di questa filosofia
                        è il raggiungimento dell’illuminazione.&nbsp; Secondo <strong>il Buddismo Chan</strong>,
                        <strong>l’illuminazione</strong> può essere raggiunta tramite la <em>meditazione senza oggetto</em> o
                        <em>zuochan</em>, che permette all’individuo di prescindere dalla parte discorsiva e intellettuale della mente per
                        dedicarsi a quella più intuitiva.
                    </p>

                    <h3>I principi del Buddismo Chan</h3>
                    <p>
                        I <strong>principi del Buddismo</strong> si basano sulla pratica del <strong>Dharma</strong>: dimostrare generosità
                        nei confronti del prossimo, essere amorevoli, purificarsi dal Karma negativo e creare Karma positivo in modo da
                        intraprendere il percorso spirituale per raggiungere l’illuminazione.
                    </p>
                    <p>
                        <strong>I 4 principi fondamentali del Buddismo Chan sono:</strong>
                    </p>
                    <ol>
                        <li>Avere una condotta retta</li>
                        <li>Essere in armonia con la natura</li>
                        <li>Astenersi dal giudicare gli altri</li>
                        <li>Rinunciare a ciò che è in superficie</li>
                    </ol>
                    <p>
                        <strong>Da Bodhidharma:</strong>
                    </p>
                    <Quote author={"(Quattro nobili versi di Bodhidharma)"}>
                    <p>
                        Una speciale tradizione esterna alle scritture,
                    </p>
                    <p>
                        Non dipendente dalle parole e dalle lettere,
                    </p>
                    <p>
                        Che punta direttamente alla cuore-mente dell’uomo,
                    </p>
                    <p>
                        Che vede dentro la propria natura e raggiunge la buddhità.
                    </p>
                    </Quote>

                    <Image src="/images/blog/monaco-buddista.jpg" width={480} height={320} alt="Monaco Buddista"/>

                    <h2>Kung Fu e Buddismo: due storie che si intrecciano</h2>
                    <p>
                        <strong>Bodhidharma</strong>, <strong>Damo</strong> o <strong>Dharma</strong> è stato un personaggio fondamentale per
                        la <strong>storia del Kung Fu</strong> e dello <strong>Shaolin</strong> ed è da lui che ereditiamo l’interpretazione
                        di un Kung Fu che sia un ottimo metodo per <strong>migliorare le proprie abilità fisiche</strong>, ma soprattutto
                        una Via per l’evoluzione e la crescita personale, <strong><em>una strada che faccia sviluppare all’individuo le sue
                            potenzialità al massimo</em></strong>.
                    </p>
                    <p>
                        Dal punto di vista delle tecniche, degli esercizi e delle sequenze, tra gli insegnamenti più importanti che Damo ha
                        lasciato ai suoi discepoli e che hanno contribuito a creare il primo nucleo dello <a
                            href="https://www.kungfuscuolaxindao.it/shaolin/"><strong>Stile Shaolin</strong></a> abbiamo:
                    </p>
                    <ul>
                        <li>I 18 palmi dei discepoli del <strong>Buddha</strong> (Luo Han Shi Ba Shou)</li>
                        <li>Esercizi meditativi statici e dinamici (Jing Gong e Gong Gong)</li>
                        <li>La <strong>Respirazione Buddista</strong> per purificare il corpo e la mente</li>
                    </ul>
                    <p>
                        Alcune <a href="https://www.kungfuscuolaxindao.it/armi-kung-fu/"><strong>armi tradizionali del Kung Fu</strong></a>:
                    </p>
                    <ul>
                        <li>Sequenza di <a href="https://www.kungfuscuolaxindao.it/bastone-lungo-shaolin/"><strong>tecniche con il bastone
                                    di Damo</strong></a> (Damo Gun)</li>
                        <li>Sequenza di <a href="https://www.kungfuscuolaxindao.it/sciabola-cinese-kung-fu/"><strong>tecniche con la spada
                                    di Damo</strong></a> (Damo Jian)</li>
                        <li>Sequenza di tecniche con la piccozza di Damo (Damo Zhang)</li>
                    </ul>

                    <h2>Bodhidharma: gli ultimi anni</h2>
                    <p>
                        Dopo circa 10 anni vissuti all’interno del Tempio <strong>Bodhidharma</strong> si allontanò da <strong>Shaolin</strong> e
                        l’ultima parte della sua storia è avvolta nel mistero. Secondo una versione della storia
                        egli fu avvelenato da un <strong>monaco Shaolin</strong> invidioso del suo ruolo, secondo un’altra girò la Cina
                        diffondendo il <strong>Buddismo</strong>. Altri ancora dicono che si sia recato in Giappone.
                    </p>
                    <p>
                        Gli storici sono d’accordo nell’affermare che visse fino a tarda età, gli scritti dicono che morì intorno ai 150
                        anni, nel 557 d.C. sulle rive del fiume di Luo He e che fu seppellito su Xiong Er Shan <em>La collina dell’orecchio
                        dell’Orso</em>.
                    </p>
                    <p>
                        Dopo circa 3 anni dalla sua morte il <strong>monaco Song-Yun</strong> lo vide in una visione in cui gli diceva che
                        l’imperatore era morto e che lui era diretto in India. Il monaco accertatosi che il vecchio imperatore era morto
                        davvero, il nuovo patriarca decise di aprire la tomba di Damo che con grande stupore era vuota.
                    </p>
                    <p>
                        All’interno della tomba era rimasto solo il sandalo del Maestro, oggi conservato come reliquia al <strong>Tempio
                            Shaolin</strong>.
                    </p>
                    <p>
                        Maestro <Link href="/scuola/maestro_gumazza/">Marco Gamuzza</Link>
                    </p>
                </div>
            </BoilerPlate>
        </Layout>
    );
}