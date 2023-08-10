import styles from './article.module.css';

import fs from 'fs';
import path from 'path';
import Layout from "../../../components/layout/Layout";
import BoilerPlate from "../../../components/layout/BoilerPlate";
import Link from 'next/link';
import Image from 'next/image';
import ArticleMetadata from '../../../components/ArticleMetadata';
import Quote from '../../../components/Quote';

const metadata = "principi_kungfu.json";
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
                        Nella <strong>pratica del <Link href="/blog/articles/kungfu">Kung Fu Wushu</Link></strong>, di qualunque
                        stile si tratti, è essenziale studiare e allenarsi con delle linee guida, che ti consentano di progredire
                        costantemente e di non lasciare al caso la tua crescita.
                    </p>
                    <p>
                        Infatti, può succedere di allenare le tecniche fondamentali, dette in cinese <strong><em>Jibengong</em></strong>;
                        le <strong>forme del Kung Fu</strong> chiamate <em>Tao Lu</em> e moltissime altre specialità cercando di
                        perfezionarle sempre di più.</p><p>Cercare di far meglio senza un’idea chiara, senza un metodo sia
                        pratico che teorico è come cercare di arrivare in un luogo senza conoscere il punto cardinale, senza una mappa.
                    </p>
                    <p>
                        Puoi arrivarci, ma dopo molto tempo, e perdendoti più volte.
                    </p>
                    <p>
                        Esistono <strong>5 principi del Kung Fu</strong> che ti possono dare una guida precisa nel tuo studio
                        e nei tuoi allenamenti.
                    </p>
                    <p>
                        Questi <strong>5 principi del Kung Fu Wushu</strong> sono come una sorta di vademecum, che in
                        modalità rapida ti comunicano se ti stai allenando secondo i criteri corretti, consentendoti
                        di auto analizzarti e osservarti, apportando correzioni e di conseguenza perfezionando il tuo Kung Fu.
                    </p>
                    <p>
                        Vediamo quali sono questi <strong>principi del Kung Fu</strong> e come interpretarli:
                    </p>
                    <span className={styles.centerTxt}>
                        <div><strong>手</strong></div>
                        <div><strong>SHǑU</strong></div>
                    </span>
                    <span className={styles.centerTxt}>
                        <div><strong>眼</strong></div>
                        <div><strong>YǍN</strong></div>
                    </span>
                    <span className={styles.centerTxt}>
                        <div><strong>身</strong></div>
                        <div><strong>SHĒN</strong></div>
                    </span>
                    <span className={styles.centerTxt}>
                        <div><strong>法</strong></div>
                        <div><strong>FǍ</strong></div>
                    </span>
                    <span className={styles.centerTxt}>
                        <div><strong>步</strong></div>
                        <div><strong>BÙ</strong></div>
                    </span>

                    <h2>Principi del Kung fu</h2>

                    <h3><strong>手</strong> (shǒu): Mano</h3>
                    <p>
                        Letteralmente significa mano o mani, si intente <strong>la forma e gestualità delle mani
                        nella pratica dello stile di Kung Fu</strong>.
                    </p>
                    <p>
                        Il termine completo nel <strong>Kung Fu</strong> che designa lo studio gestuale e metodo
                        delle mani è infatti detto: <strong>Shǒu Xíng</strong> (forma della mano).
                    </p>
                    <p>
                        Ti focalizzerai inizialmente solo sul gesto e sulla posizione della
                        mano, <strong>le principali forme con le mani sono 3</strong>:
                    </p>
                    <ul>
                        <li>pugno, <strong>quan</strong></li>
                        <li>palmo, <strong>zhang</strong></li>
                        <li>gancio, <strong>gou</strong></li>
                    </ul>
                    <p>
                        Poi, proseguendo nei livelli più avanzati degli stili tradizionali sono molte le forme da adottare.
                    </p>
                    <p>
                        Vediamo qualche esempio: dovrai assicurarti di chiudere il pugno nel modo corretto, piegando con
                        precisione le dita e portando il pollice al di sopra della seconda falange del dito medio.
                    </p>
                    <p>
                        Per eseguire correttamente la tecnica di mano detta <strong><em>Gou</em></strong> (gancio) andrai a
                        unire le cinque dita della mano congiungendo tutti e cinque i polpastrelli delle dita, dopodiché
                        piegherai completamente il polso verso il basso.
                    </p>
                    <p>
                        Una volta compreso bene il gesto basilare delle sole mani, proseguirai nel <strong>migliorare ogni
                        movimento eseguito con mani e braccia</strong>, coordinandole bene tra loro, rispettando il ritmo
                        e la parte stilistica del movimento.
                    </p>

                    <h3><strong>眼</strong> (yǎn): Occhi/Sguardo</h3>
                    <p>
                        La traduzione di questo termine è occhi. Questo secondo principio è molto interessante, perché ricorda
                        di <strong>adottare uno sguardo vivo, attento, pronto ad agire</strong> e caratterizzato da
                        un’espressione di coraggio.
                    </p>
                    <p>
                        Dal semplice sguardo, se sedimenterai questo concetto ti porterà ad avere un totale atteggiamento aderente
                        con quello che è la <strong>condizione interiore ideale di un ottimo praticante di
                        Kung Fu</strong>: mentalmente forte, stabile, audace, sicuro di sé stesso e attento.
                    </p>

                    <h3><strong>身</strong> (shēn): Corpo</h3>
                    <p>
                        <em>Shēn</em> è il corpo, inteso come <strong>corpo integrato, capace di muoversi in armonia</strong>,
                        liberandosi dalle tensioni e rigidità. Con questo terzo principio, acquisite le basi e i fondamentali
                        dello stile di Kung Fu ti addentrerai allo <strong>studio del movimento connesso che dovrà risultare
                        sinuoso e forte allo stesso tempo</strong>.
                    </p>
                    <p>
                        Il termine completo che rappresenta questo concetto di movimento raffinato è <strong><em>Shēn Fǎ</em></strong>.
                    </p>
                    <p>
                        <strong>Esistono due tipi di Shēn Fǎ nel Kung Fu:</strong> uno principale per gli stili esterni ed uno
                        per gli stili interni. Il termine specifico per lo sviluppo del movimento raffinato del movimento del
                        corpo negli stili esterni come lo Shaolin è detto <strong><em>Wai Gong Shen Fa</em></strong>.
                    </p>

                    <h3><strong>法</strong> (fǎ): Tecnica</h3>
                    <p>
                        Questo quarto principio <strong>indica la tecnica marziale</strong> che può essere eseguita con
                        qualunque parte del corpo, che sia una tecnica di pugno, di palmo, di parata, di gomito o di calcio,
                        piuttosto che uno spostamento.
                    </p>
                    <p>
                        Comprendere il <strong><em>Fǎ</em></strong> vuol dire <strong>essere conscio di quello che stai
                        facendo</strong>, di come e quando immettere la tecnica nel modo giusto. È
                        la <strong>comprensione dell’applicazione marziale</strong> detta in cinese nel suo termine
                        completo <strong><em>Yong Fǎ</em></strong>.
                    </p>

                    <h3><strong>步</strong> (bù): Posizioni</h3>
                    <p>Ultimo principio di questa lista, ma di fondamentale importanza.</p>
                    <p>
                        <strong><em>Bù</em></strong> indica la corretta esecuzione delle posizioni e degli spostamenti,
                        sono due i termini cinesi nel Kung Fu che rappresentano in modo completo questi due concetti
                        legati tra loro; <strong><em>Bu Xing</em></strong> posizioni e <strong><em>Bu Fǎ</em></strong> spostamenti.
                    </p>
                    <p>
                        Le posizioni effettuate correttamente ti garantiscono stabilità, equilibrio e capacità di generare
                        energia da dirigere in qualunque parte del corpo, che sia un attacco o difesa.
                    </p>
                    <p>
                        <strong>Le 5 posizioni fondamentali sono</strong>:
                    </p>
                    <ul>
                        <li><strong><em>Mabu</em></strong> (posizione del cavaliere)</li>
                        <li><strong><em>Gongbu</em></strong> (posizione dell’arciere)</li>
                        <li><strong><em>Pubu</em></strong> (posizione bassa a una gamba tesa)</li>
                        <li><strong><em>Xubu</em></strong> (posizione con passo vuoto)</li>
                        <li><strong><em>Xiebu</em></strong> (posizione incrociata).</li>
                    </ul>
                    <p>
                        Gli spostamenti, che hanno al loro interno la struttura delle posizioni di base, ti consentono di
                        uscire da un eventuale pericolo di attacco dell’avversario; mentre le posizioni ti favoriscono
                        nel trovare le linee d’attacco più strategiche nel combattimento, utilizzando a tuo vantaggio
                        tempo e spazio.
                    </p>
                    <p><strong>I principali spostamenti nel Kung Fu sono:</strong></p>
                    <ul>
                        <li><strong><em>Jinbu</em></strong> (spostamento in avanti)</li>
                        <li><strong><em>Tuibu</em></strong> (spostamento in arretramento)</li>
                        <li><strong><em>Zuǒ Ce Shan Bu</em></strong> (spostamento laterale sinistro)</li>
                        <li><strong><em>Yòu Ce Shan Bu</em></strong> (spostamento laterale destro)</li>
                        <li><strong><em>San Jiao Bu</em></strong> (spostamento a triangolo).</li>
                    </ul>

                    <h2>Conclusioni</h2>
                    <p>
                        Pertanto, ogni qualvolta decidi di allenarti questi 5 <strong>principi del Kung Fu</strong> ti
                        possono fornire la mappa corretta per guidarti in modo consapevole a migliorare il
                        tuo <Link href="https://it.wikipedia.org/wiki/Arti_marziali_cinesi" target="_blank" rel="noopener noreferrer"><strong>Kung Fu Wushu</strong></Link>.
                    </p>
                    <p>Ricorda che c’è differenza tra <em>fare</em> e <em>saper fare</em>.</p>
                    <Quote author="Johann Wolfgang Goethe" href="https://it.wikipedia.org/wiki/Johann_Wolfgang_von_Goethe" newPage>
                        <p>La regola del cielo è la perfezione.</p>
                        <p>La regola dell’uomo è la ricerca della perfezione.</p>
                    </Quote>

                    <p>
                        Maestro <Link href="/scuola/maestro_gamuzza/">Marco Gamuzza</Link>
                    </p>
                </div>
            </BoilerPlate>
        </Layout>
    );
}