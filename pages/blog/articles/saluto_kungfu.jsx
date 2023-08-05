import styles from './article.module.css';

import fs from 'fs';
import path from 'path';
import Layout from "../../../components/layout/Layout";
import BoilerPlate from "../../../components/layout/BoilerPlate";
import Link from 'next/link';
import Image from 'next/image';
import ArticleMetadata from '../../../components/ArticleMetadata';
import Quote from '../../../components/Quote';

const metadata = "saluto_kungfu.json";
const articlesDirectory = path.join(process.cwd(), 'pages', 'blog', 'articles');

export default function ({title, description, date, cover, category}) {

    return (
        <Layout title={title} description={description}>
            <BoilerPlate>
                <div className={styles.articleContainer}>
                    <h1>{title}</h1>
                    <div className={styles.metadataContainer}><ArticleMetadata date={date} category={category}></ArticleMetadata></div>
                    <img src={cover} alt={cover}></img>
                    <p>
                        Avrai sentito parlare anche tu o visto il <strong>saluto del Kung Fu</strong>, un gesto tipico
                        del mondo delle <Link href="https://www.kungfuscuolaxindao.it/elenco-arti-marziali-cinesi/"><strong>arti marziali cinesi</strong></Link>,
                        ricco di significati originari della <strong>tradizione cinese</strong>.
                    </p>
                    <p>
                        Il <strong>saluto tradizionale</strong> rappresenta un segno di rispetto per tutti i praticanti di
                        Kung Fu:&nbsp;sia tra fratelli di pratica, sia nei confronti degli insegnanti e del Maestro. Si
                        tratta di un gesto di appartenenza alla stessa famiglia
                        del <Link href="https://www.kungfuscuolaxindao.it/kung-fu/"><strong>Kung Fu</strong></Link>.
                    </p>
                    <p>
                        Potremmo definire questo gesto una sorta di rito da compiere ogni qual volta il praticante si
                        confronta con qualcuno o con sé stesso, come nel caso del <strong><em>Tao lu</em></strong> (forma/sequenza).
                        Di solito viene eseguito sia all'inizio di un incontro o di uno scambio di tecniche, sia al termine.
                    </p>
                    <p>
                        Oltre a questo, il <strong>saluto del Kung Fu</strong> rappresenta anche un segno di pace sia con
                        chi abbiamo di fronte che con noi stesso, difatti questo è <strong>uno degli obiettivi del
                        Kung Fu</strong>: percorrere la Via della crescita personale e dell'equilibrio interiore.
                    </p>

                    <h2>La simbologia del saluto</h2>
                    <Image src="/images/blog/simbolo-yin-yang.png" alt="yin yang" height={200} width={200}/>
                    <p>
                        Il <strong>saluto del Kung Fu</strong> in cinese viene chiamato <strong>Bao Quan Li</strong> e
                        rappresenta l'unione
                        di <a href="https://www.kungfuscuolaxindao.it/yin-yang-reale-significato/"><strong>Yin Yang</strong></a>,
                        rispettivamente il primo raffigura la mano chiusa e il secondo la mano aperta.
                    </p>
                    <p>
                        La mano destra rappresenta lo <strong>Yin</strong>, la contrazione. Mentre la sinistra rappresenta
                        lo <strong>Yang</strong>, l'espansione.
                    </p>
                    <p>
                        Questa gestualità bipolare proviene dalla Filosofia Taoista che vede ogni cosa in base agli elementi:
                        la terra e il cielo, la forza e la debolezza, il sole e la luna.
                    </p>
                    <p>
                        Secondo l'interpretazione tipica del mondo delle <strong>arti marziali cinesi</strong> il pugno
                        chiuso sarebbe la <strong>capacità di combattere</strong>, esso rappresenta
                        infatti <strong><em>la guerra</em></strong> e <strong><em>le doti del marzialista</em></strong> di
                        saperla mettere in atto; alla mano aperta invece, che sovrasta e protegge la destra,
                        corrisponde <strong><em>la pace</em></strong>.
                    </p>

                    <h2>Quando si usa</h2>
                    <p>
                        Quando si entra in palestra rendi omaggio al luogo d'allenamento e contemporaneamente a tutti i grandi
                        Maestri che hanno trasmesso il loro sapere nel <strong>Wushu Guan</strong> in cinese mandarino (sala
                        di allenamento marziale).
                    </p>
                    <p>
                        Rivolto al maestro all'inizio e alla fine della lezione o dopo aver ricevuto un insegnamento. Dopo uno
                        scambio tecnico con il compagno per ringraziare di essersi allenati reciprocamente. All'inizio e alla
                        fine di un taolu per onorare lo spirito dello stesso e i maestri che lo hanno tramandato e per favorire
                        la concentrazione.
                    </p>

                    <h2>Come si esegue</h2>
                    <p>
                        <strong>Il saluto del Kung Fu</strong> si esegue in posizione eretta, piedi uniti (posizione bing bu),
                        tenendo la mano sinistra aperta e distesa a palmo con le dita dall'indice al mignolo tese e il pollice
                        ripiegato sul lato del palmo; la mano destra è chiusa a pugno, il palmo sinistro va ad appoggiarsi
                        sulle prime due nocche della mano destra, le braccia formano un cerchio all'altezza del petto.
                    </p>
                    <h3>La mano destra</h3>
                    <p>
                        Il pugno destro chiuso sta a significare la volontà di combattere, simboleggia audacia e potenza, e
                        nella simbologia del diagramma "<strong>Tai Ji Tu</strong>" corrisponde allo Yin, ovvero la contrazione,
                        la notte, il buio, la profondità ecc.
                    </p>
                    <h3>La mano sinistra</h3>
                    <p>
                        Il palmo sinistro appoggia sul pugno con il preciso intento di non tramutare l'audacia in confusione e
                        la potenza in violenza, nella simbologia del diagramma <em><strong>Tai Ji Tu</strong></em>&nbsp;rappresenta
                        lo Yang; l'espansione, il giorno, la luce, l'esteriorizzazione ecc.
                    </p>
                    <h3>Le braccia</h3>
                    <p>
                        Il <strong>cerchio</strong> che si forma con le mani, le braccia e il petto
                        simboleggia <strong>nobiltà</strong> d'animo e l'unità tra praticanti di <strong>Wushu</strong>.
                    </p>
                    <p>
                        Nella Cina antica il <strong>saluto</strong> aveva anche un'altra utilità, infatti trasmetteva rispetto e
                        in in questo modo la persona poteva mantenere una distanza di sicurezza&nbsp;evitando così eventuali
                        bloccaggi o attacchi a sorpresa.
                    </p>
                    <p>
                        Se conoscessi qualche <strong>tecnica di Qinna</strong>&nbsp;(leva articolare) ti sarebbe possibile
                        afferrare la mano di un individuo che ti saluta per attaccarlo di sorpre&shy;sa.&nbsp; Il <strong>saluto
                        del Kung Fu</strong> essendo fatto a distanza poteva essere al contempo un segno di educazione e il
                        miglior modo di prevenire una cattiva intenzione.</p><p>Nell'universo del <strong>Kung Fu</strong> esistono
                        diversi modi, che si potrebbero definire "varianti", di eseguire il saluto, che però resta sostanzialmente
                        lo stesso: come il Kung Fu è sempre uno ma ne esistono diversi stili che lo interpretano a proprio modo.
                        Tuttavia nel <strong>1986</strong> la commissione nazionale di <strong>Wushu</strong>, ha imposto una
                        regola in modo da rendere il saluto del <strong>Wushu</strong> universale e standardizzato nelle Scuole
                        definite "moderne".
                    </p>

                    <h2>Terminologia ledata al saluto</h2>
                    <h3>All'inizio della lezione</h3>
                    <p>
                        <strong>Yu Bei Shi</strong>: Preparazione, piedi uniti con braccia e mani lungo i fianchi. Portare subito
                        dopo le mani&nbsp;all'altezza delle spalle e circa 30 centimetri davanti al petto in posizione "palmo/pugno".
                    </p>
                    <p>
                        <strong>Jing Li</strong>: Eseguire un inchino con la testa nei confronti del Maestro o dell'istruttore (Shifu o Laoshi).
                    </p>
                    <h3>Al termine della lezione</h3>
                    <p>
                        <strong>Yu Bei Shi</strong>: Preparazione, piedi uniti con braccia e mani lungo i fianchi. Portare subito dopo
                        le mani all'altezza delle spalle e circa 30 centimetri davanti al petto in posizione "palmo/pugno".
                    </p>
                    <p>
                        <strong>Ringraziamento</strong>: Il Maestro o l'istruttore pronuncia il termine "Xie Xie" (grazie), gli allievi
                        rispondono "Xie Xie Shifu" o "Xie Xie Laoshi".
                    </p>
                    <p>
                        <strong>Zai Jian</strong> ("arrivederci"): Pronunciato dal Maestro agli allievi.
                    </p>
                    <p>
                        <strong>Lao Shi</strong> o <strong>Shifu</strong>, <strong>Zai Jian</strong> (insegnante o Maestro, "arrivederci"):
                        Pronunciato dagli allievi al Maestro.
                    </p>
                    <h3>Conclusione</h3>
                    <p>
                        Ecco spiegata l'importanza del saluto, i suoi usi e il significato più profondo.
                    </p>
                    <Quote author="Maestro Marco Gumazza" href="https://www.kungfuscuolaxindao.it/saluto-kung-fu/">
                        <p>Il saluto è nel rispetto e il rispetto inizia con il saluto.</p>
                    </Quote>
                </div>
            </BoilerPlate>
        </Layout>
    );
}

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