import styles from './article.module.css';

import fs from 'fs';
import path from 'path';
import Layout from "../../../components/layout/Layout";
import BoilerPlate from "../../../components/layout/BoilerPlate";
import Link from 'next/link';
import Image from 'next/image';
import ArticleMetadata from '../../../components/ArticleMetadata';
import Quote from '../../../components/Quote';

const metadata = "arti_marziali.json";
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
                        Le <strong>arti marziali</strong> sono nate come <strong>sistemi codificati di combattimento</strong> il cui fine era
                        quello di <strong>migliorare le proprie abilità di difesa e attacco</strong>, durante le battaglie in periodi di
                        guerra. Nel tempo si sono evolute, e pur mantenendo parte della loro iniziale essenzialità, oggi si sono evolute e
                        rappresentano un percorso di miglioramento individuale.
                    </p>
                    <p>
                        Infatti, le <strong>arti marziali</strong> vengono studiate per diversi motivi:
                    </p>
                    <ol>
                        <li>Potenziare le proprie abilità fisiche in generale e nel combattimento.</li>
                        <li>Acquisire maggiore consapevolezza del proprio corpo e migliorare la propria salute fisica e mentale.</li>
                    </ol>
                    <p>
                        Queste pratiche hanno una storia molto antica e riconducibile maggiormente all’Asia, in particolare alla Cina, al
                        Giappone e all’India.
                    </p>
                    <p>
                        Come accade spesso per le discipline antiche non abbiamo delle precise fonti storiche a cui possiamo fare
                        affidamento, ecco perché le storie che sono legate a queste pratiche hanno una connotazione leggendaria.
                    </p>
                    <p>
                        In questa Guida ti darò una panoramica completa di questo mondo, in dettaglio ti spiegherò che <strong>cos’è l’arte
                            marziale</strong> con l’origine e il significato della parola, la <strong>storia delle arti marziali</strong>, i
                        <strong>tipi di arte</strong> <strong>marziale</strong> e la loro evoluzione, in conclusione i maggiori benefici
                        della pratica.
                    </p>

                    <h2>Che cos’è l’arte marziale</h2>
                    <p>
                        Ogni anno persone in tutto il mondo si avvicinano al <strong>mondo delle arti marziali</strong>, alcune spinte dalla
                        curiosità e dal fascino che le contraddistingue, altre per gli enormi benefici dal punto di vista fisico e mentale
                        che vanno poi ad influenzare ogni area della vita.
                    </p>
                    <p>
                        In pochi però si soffermano sul vero <strong>significato della parola arte marziale</strong>, questi due termini
                        uniti rendono perfettamente l’idea di ciò che è o dovrebbe essere un sistema codificato.
                    </p>
                    <p>
                        Abbiamo da una parte la parola <strong>Arte</strong>:
                    </p>
                    <Quote author="Enciclopedia Treccani" href="https://www.treccani.it/vocabolario/arte/" newPage>
                        <p>
                            La capacità di agire e di produrre, basata su un particolare complesso di regole
                            e di esperienze conoscitive e tecniche, e quindi anche l’insieme delle regole e dei procedimenti per
                            svolgere un’attività umana in vista di determinati risultati.
                        </p>
                    </Quote>

                    <p>
                        Dall’altra la parola <strong>marziale</strong>:
                    </p>
                    <Quote author="Enciclopedia Treccani" href="https://www.treccani.it/enciclopedia/marco-valerio-marziale/" newPage>
                        <p>
                            Del dio Marte, che appartiene o si riferisce a Marte, della guerra, di cosa che ha attinenza con la guerra.
                        </p>
                    </Quote>

                    <p>
                        Quindi <strong>arte marziale</strong> per intende un sistema di regole ben codificato (legate alle esperienze passate
                        degli Antichi Maestri) con particolare risalto alla bellezza dei movimenti e alla loro efficacia nel combattimento.

                    </p>
                    <p>
                        Ed ecco che soffermandoci sul significato delle singole parole comprendiamo da subito la differenza tra queste
                        discipline e gli sport da combattimento, infatti le arti marziali si soffermano sullo studio del movimento, la
                        codifica di tecniche precise, il combattimento e l’evoluzione del praticante.
                    </p>
                    <p>
                        Mentre, gli sport da combattimento hanno il loro focus appunto sul miglioramento della capacità combattiva.
                    </p>
                    <p><strong>I luoghi dove nascono le arti marziali:</strong></p>
                    <span>
                        <Image src="/images/blog/dove-nascono-le-arti-marziali-1.jpg" width={240} height={160} alt="Muraglia cinese"/>
                        <p>Cina</p>
                    </span>
                    <span>
                        <Image src="/images/blog/dove-nascono-le-arti-marziali-2.jpg" width={240} height={160} alt="Giappone"/>
                        <p>Giappone</p>
                    </span>
                    <span>
                        <Image src="/images/blog/dove-nascono-le-arti-marziali-3.jpg" width={240} height={160} alt="Corea"/>
                        <p>Corea</p>
                    </span>

                    <h2>Storia ed evoluzione delle arti marziali</h2>
                    <p>
                        La <strong>storia delle arti marziali</strong> viene spesso fatta coincidere con le prime forme di combattimento
                        delle popolazioni antiche, addirittura si parla dei primi insediamenti umani.
                    </p>
                    <p>
                        In realtà, è bene distinguere la differenza tra il combattimento dettato dalla necessità di sopravvivenza dell’uomo
                        in un ambiente inizialmente ostile, dalla codifica di un sistema marziale che avverrà in un secondo momento.
                    </p>
                    <p>
                        Riferendoci al <strong><em>combattimento</em></strong> nel senso generale, questo è sempre esistito fin dall’inizio
                        dell’umanità, dapprima avveniva in relazione con gli animali, quindi per procacciarsi il cibo (la caccia), in un
                        secondo momento in relazione con i gruppi esterni, quindi per difendere il proprio territorio dagli attacchi.
                    </p>
                    <p>
                        Abbiamo un resoconto di queste situazioni nei dipinti rupestri dell’età del ferro (1000 a.C.) in cui l’uomo inizia a
                        raffigurare duelli di figure umane, talvolta con armi.
                    </p>
                    <p>
                        Ne abbiamo testimonianza anche in Italia con le incisioni rupestri della Val Camonica.
                    </p>
                    <p>
                        Per iniziare a parlare davvero di arti marziali dobbiamo aspettare ancora un po’ di tempo e spostarci dall’altra
                        parte del mondo, ma facciamo un passo per volta seguendo l’ordine storico.
                    </p>

                    <h3>Arti marziali europee</h3>
                    <Image src="/images/blog/arti-marziali-in-europa.jpg" alt="arti marziali europee" width={480} height={320}/>
                    <p>
                        Nella<strong> storia delle arti marziali</strong> è comune inserire anche la <strong>storia dei sistemi di lotta
                            della Grecia antica e di Roma</strong>, anche se come specificato nel capitolo precedente non si può parlare
                        realmente di arti marziali, ma più di sistemi di combattimento.
                    </p>
                    <p>
                        Proprio da questi <strong>sistemi di combattimento</strong> molto antichi derivano delle discipline oggi molto
                        praticate come la lotta greco romana e il pugilato. Addirittura, esistono delle testimonianze del I millennio a.C.
                        in cui vengono mostrati i primi combattimenti di pugilato in cui era possibile combattere solo con i pugni.
                    </p>
                    <p>
                        <strong>Nell’antica Grecia il combattimento faceva parte della vita di ogni giorno</strong>, tanto che i sistemi di
                        lotta erano previsti anche all’olimpiadi ed erano le discipline sportive più amate. Tutto questo testamento
                        culturale sarà poi ereditato da Roma, che utilizzerà la maggior parte di queste conoscenze all’interno delle arene
                        con i gladiatori.
                    </p>
                    <p>
                        In seguito nel Medioevo continuò a diffondersi un grande interesse per i <strong>manuali di combattimento</strong>,
                        in particolare trattati sull’utilizzo della spada dello scudo, sul combattimento della spada due mani e sul
                        combattimento a mani nude.
                    </p>
                    <p>
                        L’arma che ha avuto più successo in Europa è stata la spada europea, infatti fino alla prima guerra mondiale erano
                        previsti i duelli, mentre la moderna scherma si sviluppò in modo importante solo a partire dal XIX secolo.&nbsp;
                    </p>
                    <p>
                        Le arti marziali che conosciamo noi oggi si diffonderanno in Europa solo a partire dallo scorso secolo con l’arrivo
                        di importanti maestri che divulgheranno le loro pratiche.
                    </p>

                    <h3>Arti marziali cinesi</h3>
                    <Image src="/images/blog/kung-fu.jpg" alt="arti marziali cinesi" width={480} height={320}/>
                    <p>
                        Quando si parla di arti marziali, la Cina ha un ruolo centrale, infatti possiamo dire che rappresenta il cuore
                        pulsante dell’origine di tutte le arti marziali che si sono diffuse poi nel mondo. Nelle fonti storiche abbiamo
                        traccia di tecniche di lotta nella Cina del Nord già a partire dall’XI secolo a.C., periodo della dinastia Zhou.
                    </p>
                    <p>
                        Presumibilmente, queste non fanno riferimento ad un vero e proprio sistema, ma a quell’insieme di tecniche di
                        combattimento che vedranno poi un’evoluzione ed una codifica precisa a partire dal VI secolo d.C.
                    </p>
                    <p>
                        Perché alle <strong>arti marziali cinesi</strong> è spesso associata questa filosofia di evoluzione umana? La
                        risposta va cercata nelle sue origini, infatti la nascita del primo nucleo di tecniche del Kung Fu è in stretta
                        relazione con i principi filosofici del Buddhismo Chan.
                    </p>
                    <p>
                        La <Link href="/blog/articles/kungfu"><strong>nascita del Kung Fu</strong></Link> è infatti attribuita
                        ad un leggendario monaco chiamato <Link
                            href="https://www.kungfuscuolaxindao.it/bodhidharma/"><strong>Bodhidharma</strong></Link> che avrebbe permesso la
                        diffusione del buddhismo di corrente Chan (altre correnti del Buddhismo erano già diffuse in Cina).
                    </p>
                    <p>
                        La sua storia è avvolta nel mistero, ma tutte le fonti ci raccontano che fu proprio lui ad avere un ruolo chiave
                        nella costruzione del <strong>tempio Shaolin</strong> e nella codifica delle prime tecniche del famoso <strong>stile
                            Shaolin</strong>, <strong>considerato il primo stile di Kung Fu</strong> per eccellenza.
                    </p>
                    <p>
                        Bodhidharma in realtà fece molto più di questo, infatti insegnò ai monaci del tempio Shaolin come seguire uno stile
                        di vita sano praticando la meditazione, alimentandosi in modo equilibrato e svolgendo attività fisica per rafforzare
                        il corpo e il carattere.
                    </p>
                    <p>
                        L’idea delle arti marziali cinesi è proprio questa: formare un individuo forte ed equilibrato a 360°. Ecco perché in
                        passato era comune che in Cina i figli venissero affidati ad un Maestro di Kung Fu, che non era dunque solo un
                        insegnante di arti marziali, ma rappresentava un educatore per piccoli e grandi allievi.
                    </p>
                    <p>
                        Nei testi antichi, che non si sa come utilizzano sempre delle parole appropriate, I monaci fanno riferimento agli
                        insegnamenti di Bodhidharma dicendo che “impararono la via della saggezza e dell’illuminazione”. Frasi di questo
                        tipo ci fanno comprendere che il Kung Fu inteso nella sua essenza più pura rappresenta un percorso di vita.
                    </p>
                    <p>
                        Grazie alla loro lunga storia le arti marziali cinesi si sono poi evolute e numerosi stili, principalmente suddivisi
                        in stili esterni e stili interni. Gli stili esterni si concentrano maggiormente sul rafforzamento del fisico,
                        sull’utilizzo della forza e della velocità, lo stile per eccellenza è lo <strong>Shaolin</strong> che a sua volta si
                        dirama in molti sotto stili.
                    </p>
                    <p>
                        Per approfondire leggi:
                    </p>
                    <ul>
                        <li><Link href="/blog/articles/shaolinquan"><strong>La storia di Shaolin</strong></Link></li>
                    </ul>
                    <p>
                        Gli stili interni invece si concentrano sullo ascolto profondo di tutta la struttura fisica attraverso movimenti più
                        fluidi ed elastici e sullo sviluppo dell’energia interna con un conseguente impatto positivo sulla salute generale.
                    </p>
                    <p>
                        Lo stile interno per eccellenza è il <Link href="https://www.kungfuscuolaxindao.it/tai-chi-quan/"><strong>Tai Chi
                                Quan</strong></Link> che unisce l’efficacia marziale agli straordinari benefici che ha sulla salute, ormai
                        confermati dai diversi studi scientifici.
                    </p>
                    <p>
                        Per approfondire leggi:
                    </p>
                    <ul>
                        <li><Link href="https://www.kungfuscuolaxindao.it/benefici-tai-chi/"><strong>I benefici del Tai Chi</strong></Link></li>
                    </ul>

                    <h3>Arti marziali giapponesi</h3>
                    <Image src="/images/blog/arti-marziali-giapponesi-karate.jpg" alt="arti marziali giapponeri" width={480} height={320}/>
                    <p>
                        Pur concentrando la nostra attenzione sulle arti marziali cinesi, in una Guida completa sulle arti marziali abbiamo
                        scelto di inserire le <strong>arti marziali giapponesi</strong> per il loro importante impatto culturale in
                        Occidente.
                    </p>
                    <p>
                        Quando si parla di <strong>arte marziale giapponese</strong> il richiamo al Karate è spontaneo, perché è sicuramente
                        lo stile più apprezzato e che maggiormente si è diffuso in Europa e negli Stati Uniti. Nonostante sia di più recente
                        nascita, come avviene per le arti marziali cinesi anche nel caso del karate non abbiamo a disposizione delle fonti
                        storiche certe.
                    </p>
                    <p>
                        Quello che sappiamo è che <strong>la storia del Karate ha origine nel sud del Giappon</strong>e, in particolare
                        dall’isola Okinawa che era divisa in tre principati: Hokuzan, Chuzan e Nanzan che avevano stretti rapporti
                        commerciali con la provincia cinese di Fukien.
                    </p>
                    <p>
                        Probabilmente proprio per questo motivo alcune tradizioni provenienti dal monastero Shaolin arrivarono in Giappone e
                        portarono alla nascita di uno stile che aveva come modello il Kung Fu cinese.
                    </p>
                    <p>
                        In principio esistevano solo <strong>due scuole di Karate</strong>: <strong>Shorei</strong> e
                        <strong>Shorin</strong>, il primo, in cui si dava maggiore enfasi alle tecniche di braccia, alla respirazione e
                        all’utilizzo della forza; il secondo, caratterizzato da posizioni più ampie e basse, da tecniche veloci e dal
                        maggiore utilizzo delle gambe.
                    </p>
                    <p>
                        Con l’evoluzione della disciplina nacquero molti stili con elementi peculiari ideati dai vari maestri che diedero il
                        loro contributo. In seguito all’inserimento del karate all’interno dei giochi olimpici è diventato prioritario
                        riconoscere degli stili di karate. Oggi, la World Karate Federation riconosce quattro stili:
                    </p>
                    <ul>
                        <li><strong>Shōtōkan-ryū</strong></li>
                        <li><strong>Shitō-ryū</strong></li>
                        <li><strong>Gōjū-ryū</strong></li>
                        <li><strong>Wadō-ryū</strong></li>
                    </ul>
                    <p>
                        Sicuramente è da riconoscere il grande lavoro di diffusione che i maestri giapponesi fecero in Occidente, in
                        particolare negli anni 50 e 60 approdarono una serie di importanti maestri in Europa, come il Maestro Hiroshi Shirai
                        che viene oggi riconosciuto come il massimo divulgatore del karate tradizionale di stile Shotokan.
                    </p>
                    <ul>
                        <li>Approfondimento Diffusione del Karate su <Link
                                href="https://www.karatedomagazine.com/nascita-e-diffusione-del-karate/" target="_blank"
                                rel="noopener noreferrer"><strong>Karate magazine</strong></Link>
                        </li>
                    </ul>
                    <p>
                        In generale, possiamo dire che le <strong>arti marziali giapponesi</strong> che hanno avuto maggiore diffusione sono:
                    </p>
                    <ol>
                        <li><strong>Karate</strong></li>
                        <li><strong>Judo</strong></li>
                        <li><strong>Aikido</strong></li>
                        <li><strong>Kendo</strong></li>
                        <li><strong>Sumo</strong></li>
                    </ol>

                    <h2>Elenco arti marziali</h2>
                    <p>
                        Di seguito tracciato <strong>l’elenco delle arti marziali più importanti e praticate al mondo</strong> con una
                        breve descrizione, così che tu possa avere un’idea complessiva della varietà. Come ho premesso all’inizio di
                        questa Guida tutti questi metodi hanno spesso un’origine comune proveniente dall’Oriente, nella maggior parte dei casi dalla Cina.
                    </p>
                    <ul>
                        <li><Link href="https://it.wikipedia.org/wiki/Kalarippayattu" target="_blank" rel="noopener"><strong>Kalary Payat</strong></Link>, periodo vedico 3500 a.C., popolazioni antiche dell’India</li>
                        <li><Link href="/blog/articles/kungfu"><strong>Kung Fu</strong></Link> - <Link href="/blog/articles/shaolinquan"><strong>Shaolin</strong></Link>, 527 d.C., fondatore Bodhidharma</li>
                        <li><Link href="https://www.kungfuscuolaxindao.it/tai-chi-quan/"><strong>Tai Chi</strong></Link>, tra la Dinastia Song e l’inizio della Dinastia Yuan (1274-1368 d.C.), secondo la leggenda il fondatore è Chang San Feng</li>
                        <li><Link href="https://www.kungfuscuolaxindao.it/wing-chun/"><strong>Wing Chun</strong></Link>, periodo (1662-1722), fondatrice monaca buddista Ng Mui</li>
                        <li>Capoeira (periodo coloniale 1500-1815)</li>
                        <li>Kali o chiamato Escrima, intorno al 1500</li>
                        <li>Muay Thai, XVI secolo</li>
                        <li>Jiu-Jitsu, l’arte marziale più antica in Giappone XVI secolo</li>
                        <li>Karate, XVII secolo, l’arte marziale giapponese più nota e praticata</li>
                        <li>Judo, 1882</li>
                        <li>Taekwondo, XX secolo</li>
                        <li>Krav Maga, 1910, fondatore Imi Lichtenfeld</li>
                        <li>Kendo, 1911</li>
                        <li>Aikido, 1912, fondatore Morihei Ueshiba</li>
                        <li><Link href="https://www.kungfuscuolaxindao.it/yi-quan/"><strong>Yi Quan</strong></Link>, dal 1920, fondatore Wang Xiangzhai</li>
                    </ul>

                    <h2>Perché fare arti marziali?</h2>
                    <p>
                        Ogni persona si avvicina alle <strong>arti marziali</strong> per diverse ragioni, di solito i motivi principali per
                        cui le persone si avvicinano ad un <strong>percorso marziale</strong> sono:
                    </p>
                    <ul>
                        <li>Sviluppare una buona <strong>difesa personale</strong></li>
                        <li>Migliorare la propria <strong>sicurezza interiore</strong> e plasmare il proprio carattere grazie ai
                            <strong>principi del Kung Fu</strong></li>
                        <li>Avere una <strong>completa padronanza del proprio corpo</strong> e dello spazio intorno a sé</li>
                        <li>Acquisire degli strumenti utili per imparare l’<strong>auto-disciplina</strong></li>
                        <li>Compiere un <strong>processo di evoluzione interiore</strong> assimilando i principi cardine dell’arte marziale
                            quali: umiltà, rispetto, rettitudine, lealtà, fiducia.</li>
                    </ul>
                    <p>
                        Per come intendo io la <strong>Via del Kung Fu</strong>:
                    </p>
                    <Quote author="Maestro Marco Gamuzza">
                        <p>Acquisisci le capacità e principi dell’arte marziale per poi estenderle in tutta la tua vita.</p>
                    </Quote>

                    <h2>Quale arte marziale scegliere?</h2>
                    <p>
                        Ogni <strong>arte marziale</strong> ha le sue peculiarità positive e negative, quindi la scelta è del tutto
                        personale.
                    </p>
                    <p>
                        Per <em>un primo approccio</em> all’arte marziale, la mia preferenza va
                        sicuramente sull’<strong>arte marziale orientale</strong> madre che è lo <strong>Shaolin</strong>, perché racchiude
                        tutti i principi che si sono sviluppati e hanno poi creato stili e correnti marziali in tutto il mondo.
                    </p>
                    <p>
                        Oggi è lo stile più rappresentativo di quella macro-categoria chiamata <strong>Kung Fu</strong>, traduzione di
                        <em>Duro lavoro eseguito con abilità</em>.
                    </p>
                    <p>
                        All’interno dello <strong>Shaolin</strong> il praticante ha la possibilità di formarsi in modo completo e di
                        sviluppare tutte le specialità che un <strong>marzialista</strong> dovrebbe conoscere:
                    </p>
                    <ul>
                        <li>Tecniche di pugno e di calcio</li>
                        <li>Tecniche di parata</li>
                        <li>Tecniche di spostamento</li>
                        <li>Leve articolari di base, semi-dinamiche, dinamiche e mortali</li>
                        <li>Proiezioni e sradicamento dell’avversario</li>
                        <li>Acrobatica di base (come cadere in sicurezza)</li>
                        <li>Principi di combattimento</li>
                    </ul>

                    <h2>Dove fare arti marziali?</h2>
                    <p>
                        Le scuole di <strong>arti marziali</strong>, soprattutto di <strong>Kung Fu</strong>, sono tante ma spesso non è
                        semplice trovare un insegnante che sia qualificato e possa darti una formazione completa a 360°.
                    </p>
                    <p>
                        Gli aspetti fondamentali da considerare per fare la tua scelta sono 3:
                    </p>
                    <ul>
                        <li>
                            <strong>Esperienza e formazione del Maestro</strong>: da chi è stato formato? Che titolo ha e quanto tempo ha
                            impiegato per ottenerlo? Che tipo di qualifiche possiede e dai chi sono riconosciute? E soprattutto, è in
                            continuo aggiornamento? Segue un Maestro competente?
                        </li>
                        <li>
                            <strong>Programma della scuola</strong>: studio dei fondamentali, posizioni, tecniche di gamba e di braccio,
                            spostamenti, studio del combattimento e della strategia, studio delle forme, delle leve articolari e delle
                            proiezioni. Il programma dovrebbe avere una logica ben precisa e non "riempito" a caso.
                        </li>
                        <li>
                            <strong>Le tue esigenze personali</strong>: nello specifico le aree che più ti interessanto (combattimento,
                            forme, proiezioni).
                        </li>
                    </ul>
                    <p>
                        All’interno della nostra <Link
                            href="https://www.kungfuscuolaxindao.it/scuola-kung-fu-milano/"><strong>scuola</strong></Link> il praticante viene
                        guidato dal livello principiante fino al livello esperto, maturando una conoscenza completa su tutte le principali
                        aree delle arti marziali: tecniche di pugno e di calcio, forme, leve articolari, proiezioni di sbilancimento e
                        sradicamento, studio del combattimento, studio della teoria e cultura marziale per poi proseguire con lo studio
                        degli <strong>stili interni del Kung Fu</strong>, di livello avanzato.
                    </p>

                    <h2>Come diventare istruttore di arti marziali?</h2>
                    <p>
                        La nostra <strong>scuola di Kung Fu</strong> prevede un percorso di insegnamento a tutti coloro che volessero
                        diventare <strong>istruttori di arti marziali</strong> e trasformare così una passione in un percorso di
                        crescita ancora più completo.
                    </p>
                    <p>
                        Se sei interessato/a e vuoi scoprire se fa al caso <Link href="https://www.kungfuscuolaxindao.it/istruttore-di-kung-fu/">
                            <strong>Guarda questa pagina</strong>
                        </Link> e richiedi info.
                    </p>

                    <h2>Conclusione</h2>
                    <p>
                        In questa Guida Completa ti ho dato una <strong>panoramica sulle arti marziali</strong>, che cosa sono,
                        la storia e la diffusione nel mondo, le arti marziali più note divise per luogo di origine, un elenco
                        di quelle più praticate ed infine alcuni cenni sulla pratica.
                    </p>
                    <p>
                        E tu, hai mai praticato arti marziali? Quale arte marziale ti affascina di più e perché?
                    </p>
                    <p>
                        Maestro <Link href="/scuola/maestro_gamuzza/">Marco Gamuzza</Link>
                    </p>
                </div>
            </BoilerPlate>
        </Layout>
    );
}