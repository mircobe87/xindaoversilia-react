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
                            href="/blog/articles/kungfu"><strong>arti marziali cinesi</strong></Link>.
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

                    <h2>Kung Fu: storia e origini delle arti marziali cinesi</h2>
                    <Image src="/images/blog/storia-del-kung-fu.jpeg" alt="Storia KungFu" width={480} height={320}/>
                    <p><em>Nell’immagine <Link href="https://it.wikipedia.org/wiki/Huang_Di"><strong>Huang Di</strong></Link> imperatore della dinastia Xia (2500 a.C.) <strong>Storia Kung Fu</strong></em></p>

                    <p>
                        Le <strong>origini del Kung Fu</strong> sono avvolte nel mistero, infatti esistono
                        diverse leggende e storie relative alla nascita del primo nucleo di tecniche.
                    </p>
                    <p>
                        Secondo <b>la leggenda più nota e diffusa</b>, un monaco indiano
                        chiamato <Link href="/blog/articles/bodhidharma"><strong>Bodhidharma</strong></Link>,
                        si recò in Cina presso il <Link href="/blog/articles/dove_nato_kungfu"><strong>Tempio
                        Shaolin del nord</strong></Link> (provincia dello Henan) intorno al V secolo d.C. e
                        insegnò ai <strong>monaci buddisti</strong> che vivevano nel tempio il primo nucleo
                        di tecniche di combattimento. Queste tecniche avevano sia uno scopo difensivo da popolazioni
                        esterne e animali feroci (frequenti nella foresta), sia terapeutico grazie all’apprendimento
                        di diverse tecniche di meditazione.
                    </p>
                    <p>
                        Grazie alle fonti storiche sappiamo che il <strong>Tempio Shaolin del Nord</strong> fu un luogo
                        primario nella nascita e diffusione del <strong>Buddhismo Zen</strong> in Cina e moltissimi testi buddisti e in relazione
                        alla <Link href="https://www.kungfuscuolaxindao.it/yin-yang-reale-significato/"><strong>teoria yin
                        yang</strong></Link> provengono proprio dal lavoro di traduzione dei <strong>monaci Shaolin</strong>.
                    </p>
                    <p>
                        <b>La seconda leggenda/storia</b>, meno conosciuta ma probabilmente più veritiera, racconta che un altro
                        monaco noto con il nome di <strong>Batuo</strong> (Fotuo in cinese) si recò presso quell’area qualche
                        tempo prima (precisamente nel 495 d.C.), insegnando le <strong>basi del combattimento ai monaci</strong>.
                        Batuo viene citato nei testi come il “Primo Grande Antenato” e sempre secondo i testi l’imperatore Xiao
                        Wen Di fece ingrandire il monastero in suo onore. Questo ci fa presumere che il suo ruolo fu fondamentale.
                    </p>
                    <p>
                        Guardando invece con attenzione la <strong>storia cinese</strong> e delle varie dinastie è presumibile
                        che già nel 2500 a.C., durante la dinastia Xia, esistevano dei metodi di lotta organizzata, cioè dei veri
                        e propri tornei in cui gli uomini si sfidavano nel combattimento. Ne abbiamo traccia, e in qualche modo
                        conferma, grazie ai reperti trovati nel periodo
                        dell’<strong>imperatore Huang Di</strong> (detto l’<em>imperatore giallo</em>).
                    </p>

                    <h2>Kung Fu: classificazione degli stili delle arti marziali cinesi</h2>
                    <p>Le <strong>arti marziali cinesi</strong> possono essere suddivise in due macrocategorie di <strong>stili Kung Fu</strong>:</p>

                    <h3>Stili interni del Kung Fu</h3>
                    <p><strong><em>Neijia</em></strong></p>
                    <Image src="/images/blog/tai-chi-quan.jpg" alt="Tai Chi Quan" width={800} height={450}/>
                    <p>
                        Con questa parola si intendono tutti gli <strong>stili Kung Fu interni</strong> che si fondano sullo <strong>studio
                            della forza interna</strong>, sull’efficacia del combattimento e lo sviluppo di un’<Link
                            href="https://www.kungfuscuolaxindao.it/energia-vitale/"><strong>energia</strong></Link> profonda che va veicolata
                        in tutto il corpo, chiamata <Link href="https://www.kungfuscuolaxindao.it/energia-vitale/"><strong>Qi</strong></Link>. Uno
                        degli stili interni più noti è il <Link href="https://www.kungfuscuolaxindao.it/tai-chi-quan/"><strong>Tai
                                Chi</strong></Link>. Questi, hanno l’obiettivo di sviluppare la cosidetta <em><strong>intenzione</strong></em>,
                        elemento chiave e di livello più alto a cui ogni marzialista dovrebbe ambire.
                    </p>
                    <p>
                        <b>Obiettivi degli stili interni</b>:
                    </p>
                    <ul>
                        <li>Miglioramento e conservazione della salute fisica e psichica.</li>
                        <li>Studio della forza integrata e profonda, attraverso esercizi specifici come lo <Link rel="nofollow"
                                href="https://it.wikipedia.org/wiki/Zhanzhuang"><strong>Zhang Zhuang</strong></Link> e movimenti eseguiti
                            lentamente per migliorare l’ascolto e la connessione di tutto il corpo.</li>
                        <li>Emettere una forza elastica ed esplosiva.</li>
                        <li>Studio con esercizi di contatto (da svolgere in coppia) come il <Link
                                href="https://www.marcogamuzzainternalkungfu.it/guida-al-tui-shou/"><strong>Tui Shou</strong> </Link>per
                            aumentare la sensibilità tattile, studiare le linee di forza e gestire le pressioni esterne da parte
                            dell’avversario.</li>
                        <li>Controllo emotivo.</li>
                    </ul>
                    <div className={styles.highlightedBox}>
                        <h4>Elenco degli stili interni (Neijia)</h4>
                        <ul>
                            <li><Link href="https://www.kungfuscuolaxindao.it/tai-chi-quan/"><strong>Tai Chi Quan</strong></Link> (stile della suprema polarità)</li>
                            <li><strong>Xing Yi Quan</strong> (stile della forma e della mente)</li>
                            <li><Link href="https://www.marcogamuzzainternalkungfu.it/" target="_blank" rel="noopener noreferrer"><strong>Yi Quan</strong></Link> o Da Cheng quan (<Link href="https://www.kungfuscuolaxindao.it/yi-quan/"><strong>stile dell’intenzione</strong></Link> e boxe del grande conseguimento)</li>
                            <li><strong>Tong Bei Quan</strong> (anticamente era uno stile interno e significa stile del pugno che attraversa la schiena)</li>
                            <li><strong>Bagua Zhang</strong> (stile o palmo degli otto trigrammi)</li>
                            <li><strong>Liuhe Bafa Quan</strong> (stile delle sei armonie e degli otto metodi)</li>
                        </ul>
                    </div>

                    <h3>Stili esterni del Kung Fu</h3>
                    <p><strong><em>Waijia</em></strong></p>
                    <Image src="/images/blog/shaolin.jpeg" alt="Shaolin" width={800} height={450}/>
                    <p>
                        Questa parola identifica tutti gli <strong>stili Kung Fu esterni</strong>, cioè quegli stili che impiegano per lo più
                        la forza muscolare per contrastare l’avversario. Gli <strong>stili esterni</strong> sono numerosi, quindi maggiori
                        per numero rispetto agli stili interni e di conseguenza più praticati.
                    </p>
                    <p>
                        <b>Obiettivi degli stili esterni</b>:
                    </p>
                    <ul>
                        <li>Acquisizione di potenza e velocità.</li>
                        <li>Maggiore preparazione fisica e atletica e di conseguenza maggiore resistenza e abilità.</li>
                        <li>Irrobustimento dell’apparato osteo-articolare grazie a specifici esercizi tradizionali.</li>
                        <li>Rinforzo muscolare degli arti inferiori, attraverso lo studio di posizioni basse e mantenute.</li>
                        <li>Sviluppo della coordinazione motoria per mezzo di continui cambi repentini di tecniche e spostamenti.</li>
                        <li>Integrazione di forme e tecniche mirate che richiamano l’energia difensiva, utile per difendere il corpo da
                            aggressioni esterne resistendo maggiormente agli eventuali attacchi in combattimento, preservando gli organi
                            interni e i punti vitali.</li>
                        <li>Studio delle armi fondamentali, come il bastone, la sciabola, la lancia e la spada.</li>
                    </ul>
                    <Quote>
                        <p>
                            Lo sviluppo della forza interna in questi stili è basata sul controllo della struttura
                            fisica rilassandola e rilasciando le forze, piuttosto che forzarle, allineandosi quindi
                            al principio <Link href="https://www.kungfuscuolaxindao.it/wu-wei/"><strong>Wuwei</strong></Link>.
                        </p>
                    </Quote>

                    <h2>Kung Fu: stili del Nord, stili del Sud e stili imitativi</h2>
                    <p>
                        Un’altra grande suddivisione degli <strong>stili di Gong Fu</strong> è quella geografica tra
                        gli stili del nord e quelli del sud. Le differenze che ci sono tra queste due grandi famiglie
                        sono legate a più aspetti: culturale, territoriale e sociale. Dal punto di vista
                        geografico il fiume Azzurro (Yangtze) demarca le due aree della <strong>Cina</strong>: nord e
                        sud. La divisione non rappresenta un voler “catalogare” gli <strong>stili di arti marziali
                        tradizionali cinesi</strong> in modo così rigido e definito, ma bensì l’obiettivo è quello di
                        fornire un’analisi generale al fine di portare il lettore a una maggiore consapevolezza.
                    </p>

                    <h3>Stili del nord delle arti marziali cinesi</h3>
                    <p><strong><em>Chang Quan</em></strong></p>
                    <Image src="/images/blog/arti-marziali-cinesi-stili-del-nord.jpg" alt="Stili del Nord" width={480} height={320}/>
                    <p>
                        Gli <strong>stili del nord</strong> vengono chiamati <strong>Chang Quan</strong> o Bei Quan,
                        tradotto per il primo <em>stili lunghi</em>, per il secondo stili del nord.
                    </p>
                    <p><strong>Quali sono le caratteristiche?</strong></p>
                    <ul>
                        <li>Utilizzo maggiore di posizioni ampie e predilezione alle tecniche di gambe</li>
                        <li>Movimenti ampi e rapidi</li>
                        <li>Azioni fluide ed eleganti</li>
                        <li>Spostamenti più accentuati</li>
                        <li>Combattimento a media e lunga distanza</li>
                    </ul>
                    <div className={styles.highlightedBox}>
                        <h4>Elenco degli stili del nord</h4>
                        <ul>
                            <li><Link href="/blog/articles/shaolinquan"><strong>Shaolin Quan</strong></Link> (stile/pugno della giovane foresta)</li>
                            <li><strong>Chang Quan</strong> (boxe lunga)</li>
                            <li><strong>Cha Quan</strong> (similare allo stile Chang Quan e significa pugno che percuote)</li>
                            <li><strong>Shuaijiao</strong> (lotta cinese)</li>
                            <li><strong>Baji Quan</strong> (pugilato degli 8 estremi)</li>
                            <li><strong>Bafa Quan</strong> (stile degli 8 metodi)</li>
                            <li><strong>Sanhuang Paochui</strong> (boxe/stile cannone dei tre imperatori)</li>
                            <li><strong>Mizong Quan</strong> (stile/pugilato del far perdere le tracce)</li>
                            <li><strong>Hei hu Quan</strong> (stile della tigre nera)</li>
                            <li><strong>Chuo Jiao</strong> (tradotto piedi penetranti)</li>
                            <li><strong>Hong Quan</strong> (stile del pugno rosso)</li>
                            <li><strong>Ying Zhao Quan</strong> (stile degli artigli dell’aquila)</li>
                            <li><strong>Emei Quan</strong> (stile della montagna Emei)</li>
                            <li><strong>Fanzi Quan</strong> (pugno rotante)</li>
                            <li><strong>Luo Han Quan</strong> (stile dei discepoli del Buddha)</li>
                            <li><strong>Long Quan</strong> (stile del drago)</li>
                            <li><strong>Mei Hua Quan</strong> (stile del fiore di prugno)</li>
                            <li><strong>Hou Quan</strong> (stile della scimmia)</li>
                            <li><strong>She Quan</strong> (stile del serpente)</li>
                            <li><strong>Tang Lang Quan</strong> (stile della mantide religiosa)</li>
                            <li><strong>Tantui</strong> (stile dei calci scattanti)</li>
                        </ul>
                    </div>

                    <p>Un detto recita <em>Nan Quan Bei Tui</em> che vuol dire:</p>
                    <Quote>
                        <p>Pugni al sud, calci al nord.</p>
                    </Quote>

                    <h3>Stili del sud delle arti marziali cinesi</h3>
                    <p><strong><em>Nan Quan</em></strong></p>
                    <Image src="/images/blog/arti-marziali-cinesi-stili-del-sud.jpg" alt="Stili del Sud" width={480} height={320}/>
                    <p>
                        Gli <strong>stili del sud</strong> vengono definiti <strong>Nan Quan</strong> che significa
                        stile del sud o <em>pugilato del sud</em>.
                    </p>
                    <p>Di seguito alcune caratteristiche:</p>
                    <ul>
                        <li>Movimenti potenti</li>
                        <li>Posizioni meno ampie e più statiche</li>
                        <li>Combattimento a corta distanza</li>
                        <li>Gioco rapido di braccia</li>
                        <li>Uso ridotto dei calci e dei salti</li>
                    </ul>
                    <div className={styles.highlightedBox}>
                        <h4>Elenco degli stili del sud</h4>
                        <ul>
                            <li><strong>Bai He Quan</strong> (stile della gru bianca)</li>
                            <li><strong>Long Xing Quan</strong> (boxe del drago del sud)</li>
                            <li><strong>Choy Lay Fut</strong> (Choy e Lay erano i nomi di due insegnanti, mentre Fut indica il nome Buddha)</li>
                            <li><strong>Jook Lum</strong> (stile della foresta di bambù)</li>
                            <li><strong>Pak Mei</strong> (stile del sopraciglio bianco)</li>
                            <li><Link href="https://www.kungfuscuolaxindao.it/wing-chun/"><strong>Wing Tsun</strong></Link> (stile dell’eterna primavera)</li>
                            <li><strong>Wuzu Quan</strong> (stile dei 5 antenati)</li>
                            <li><strong>Hung Gar</strong> (stile della famiglia Hung)</li>
                            <li><strong>Mok Gar</strong>&nbsp;(stile della famiglia Mok)</li>
                            <li><strong>Li Gar</strong> (stile della famiglia Li)</li>
                            <li><strong>Lau Gar</strong>&nbsp;(stile della famiglia Lao)</li>
                            <li><strong>Choy Gar</strong>&nbsp;(stile della famiglia Choi)</li>
                            <li><strong>Chow Gar</strong> (stile della mantide del sud)</li>
                        </ul>
                    </div>

                    <h3>Stili imitativi delle arti marziali cinesi</h3>
                    <span>
                        <Image src="/images/blog/arti-marziali-cinesi-1.jpg" alt="Tigre" width={240} height={160}/>
                    </span>
                    <span>
                        <Image src="/images/blog/arti-marziali-cinesi-2.jpg" alt="Mantide" width={240} height={160}/>
                    </span>
                    <span>
                        <Image src="/images/blog/arti-marziali-cinesi-3.jpg" alt="Aquila" width={240} height={160}/>
                    </span>
                    <p>
                        Un’altra suddivisione è rappresentata da quegli stili definiti “imitativi”, perché pongono
                        l’accento sui movimenti tipici di alcuni animali, come la tigre, la mantide e il drago o
                        ancora a movimenti particolari come nel caso dello stile dell’ubriaco. Oltre a richiamare
                        questi movimenti, lo studio si rifà anche alla rievocazione dell’atteggiamento peculiare
                        dell’animale, per farti alcuni esempi:
                    </p>
                    <ul>
                        <li><em>La <strong>tigre</strong> ha un atteggiamento fiero e forte, i movimenti dello stile della tigre richiamano questo senso di fierezza e forza</em></li>
                        <li><em>Il <strong>serpente</strong> dà prova di grande agilità, così come nello stile i movimenti sono fulminei e sinuosi</em></li>
                        <li><em>La <strong>mantide</strong> sorprende l’avversario con attacchi fulminei così i movimenti delle forme.</em></li>
                    </ul>
                    <div className={styles.highlightedBox}>
                        <h4>Elenco degli stili imitativi</h4>
                        <ul>
                            <li><strong>Ditang Quan</strong> (stile a terra)</li>
                            <li><strong>Hou Quan</strong> (stile della scimmia)</li>
                            <li><strong>Heihu Quan</strong> (stile della tigre nera)</li>
                            <li><strong>Hu Quan</strong> (stile della tigre)</li>
                            <li><strong>Long Quan</strong> (stile del drago)</li>
                            <li><strong>She Quan</strong> (stile del serpente)</li>
                            <li><strong>Niu Quan</strong> (stile del bue)</li>
                            <li><strong>Bailong Quan</strong> (stile del Drago Bianco)</li>
                            <li><strong>Tanglang Quan</strong> (stile della mantide religiosa)</li>
                            <li><strong>Tanglonghushi</strong> (stile della tigre e della mantide religiosa)</li>
                            <li><strong>Yingzhao Quan</strong> (stile dell’artiglio dell’aquila)</li>
                            <li><strong>Zuijiu Quan</strong> (stile dell’ubriaco)</li>
                            <li><strong>Da Sheng Pi Gua Men</strong> (stile della scimmia)</li>
                            <li><strong>Hung Gar</strong> (stile della tigre e della gru)</li>
                        </ul>
                    </div>

                    <h2>L’Allenamento nel Kung Fu</h2>
                    <Image src="/images/blog/shaolin-milano.jpg" alt="Shaolin Milano" width={480} height={320}/>
                    <p>
                        Quando parliamo di <strong>Kung Fu</strong> pensiamo innanzitutto ad un <strong>modo di
                        combattere di origine cinese</strong>, esistente da millenni, in principio utilizzato dai
                        cinesi per lottare, conquistare e difendersi.
                    </p>
                    <p>
                        In seguito, l’evoluzione di questa disciplina ha fatto maturare, da parte
                        dei <strong><Link href="/scuola/maestri_passato">Maestri del passato</Link></strong>,
                        la volontà di una ricerca volta all’evoluzione dell’uomo, per fare in modo che potesse
                        sfruttare le qualità fisiche per essere più forte unite a quelle mentali per essere in salute.
                    </p>
                    <p>
                        I vari <strong>stili tradizionali</strong> rappresentano un <strong>metodo di
                        combattimento</strong> di notevole efficacia, che tuttavia, si rivela allo studente solo dopo
                        certo periodo di pratica.
                    </p>

                    <h2>Tecniche di Kung Fu</h2>
                    <p>
                        Le <strong>tecniche di Kung Fu</strong>, infatti, devono essere praticate per innumerevoli
                        volte, finché non entrino a far parte delle reazioni inconsce e istintive dell’allievo; solo
                        allora non ci sarà più spazio tra l’attacco dell’avversario e la propria reazione; perché
                        non ci sarà bisogno di ricorrere ai lenti processi della mente razionale per pensare al da
                        farsi.
                    </p>
                    <Quote>
                        <p>Il praticante dovrà "diventare" il Kung Fu.</p>
                    </Quote>
                    <p>
                        Per questo motivo si dedica molto tempo all'<strong>allenamento dei fondamentali</strong>,
                        delle <strong>forme</strong> e delle <strong>tecniche a mani nude</strong>, creati secondo il
                        principio della massima efficacia con minor dispendio energetico possibile.
                    </p>
                    <p>
                        Questi esercizi, sono chiavi di accesso a una realtà più profonda. Un detto delle <strong>arti
                        marziali</strong> tramandato tra <strong>Maestri cinesi</strong> recita:
                    </p>
                    <Quote>
                        <p>
                            Per costruire un castello ci vuole molto tempo e tanto lavoro, ma sarà poi assai difficile
                            da abbattere. Per costruire una casa ci vuole meno tempo, ma essa crollerà molto più
                            facilmente.
                        </p>
                    </Quote>

                    <h2>I segreti del Kung Fu</h2>
                    <p>
                        <strong>Tempo e impegno</strong>. Fondamentali per diventare un esperto in questa millenaria
                        disciplina marziale. Il <strong>Kung Fu</strong>, se praticato con i giusti principi e sotto la
                        guida di un buon insegnante, rappresenta anche un’efficace metodo per la cura della propria
                        salute che unisce i vantaggi di una pratica meditativa e interiore con i vantaggi di una
                        disciplina fisica, in accordo con i principi dell’antica <strong>medicina cinese</strong> e della
                        medicina moderna.
                    </p>
                    <p>
                        L’idea della <strong>pratica </strong>è quella di formare un individuo completo, in armonia con
                        sé stesso e con ciò che lo circonda, in grado di vivere al massimo delle potenzialità umane.
                    </p>
                    <p>
                        Proprio per questo motivo, in Cina, il <strong>Gong Fu</strong> è divenuto un prezioso strumento
                        di educazione e di crescita personale e miglioramento delle capacità fisiche; condizionamento
                        cardio-respiratorio, riequilibrio ormonale, vantaggi per l’apparato
                        muscolo-scheletrico, <strong>miglioramento della coordinazione</strong>, <strong>azione
                        anti-stress</strong>.
                    </p>
                    <p>
                        Il primo dovere di un Maestro (<strong><em>Shi Fu</em></strong>), dovrebbe essere quello di
                        fornire un’educazione che aiuti a crescere persone complete e migliori. In Cina, infatti, non
                        era desueto che le famiglie affidassero, a tale scopo, un figlio a
                        un <Link href="/scuola/maestro_gamuzza"><strong>Maestro di Kung Fu</strong></Link>.
                    </p>

                    <h2>Come scegliere lo stile di Kung Fu</h2>
                    <p>
                        Premettiamo che non esiste lo stile giusto o lo stile sbagliato, ma quello più "adatto" per
                        facilitare il principiante allo <strong>studio dell’arte marziale cinese</strong>.
                    </p>
                    <p>
                        A nostro parere, lo <strong>stile più completo</strong> per avvicinarti
                        al <strong>Kung Fu</strong> - che tu sia già un adulto o che tu voglia far avvicinare tuo
                        figlio - <strong>è lo <Link href="/blog/articles/shaolinquan">Shaolin</Link></strong> e
                        ti spieghiamo subito perché.
                    </p>
                    <p>
                        Durante lo <strong>studio dello Shaolin</strong>, che viene definito "<strong>madre di tutti
                        gli stili delle arti marziali cinesi</strong>" potrai imparare a:
                    </p>
                    <ul>
                        <li><strong>Sviluppare i riflessi</strong> e le risposte del corpo con immediatezza, nel caso di un attacco o di un pericolo.</li>
                        <li><strong>Migliorare la coordinazione motoria</strong> e il radicamento del tuo corpo (questo porta oltre che un vantaggio marziale, anche posturale).</li>
                        <li><strong>Avere piena consapevolezza del tuo corpo</strong> e utilizzarlo al massimo delle sue potenzialità.</li>
                        <li><strong>Ottenere il pieno controllo del tuo stato psichico-mentale</strong> e saper quindi reagire in modo ottimale durante i periodi di stress della vita quotidiana.</li>
                        <li><strong>Potenziare</strong> quello che viene definito <strong>Yi</strong>, cioè <em><strong>l’intenzione</strong></em>, quella capacità di essere presenti nel qui e ora e di manifestare tutta la propria energia.</li>
                    </ul>
                    <Image src="/images/blog/la-pratica-del-kung-fu.jpg" alt="La pratica del KungFu" width={480} height={320}/>

                    <h2>Come imparare il Kung Fu</h2>
                    <p>
                        Per <Link href="https://www.kungfuscuolaxindao.it/come-imparare-il-kung-fu/"><strong>imparare il
                        Kung Fu</strong></Link> sono indispensabili una serie di elementi che ti danno una conoscenza
                        a 360° sulle <strong>arti marziali cinesi</strong>.
                    </p>
                    <p>
                        I benefici sopra elencati possono essere sviluppati grazie a tutta quella serie di
                        "elementi", <strong>tecniche di Kung Fu</strong>, che come un puzle compongono il mondo
                        dello <Link href="/blog/articles/shaolinquan"><strong>Shaolin</strong></Link>,
                        e sono:
                    </p>
                    <ul>
                        <li><Link href="/blog/articles/saluto_kungfu"><strong>Il saluto del Kung Fu</strong></Link>: come si esegue e qual è il suo significato profondo</li>
                        <li><strong>Le posizioni fondamentali</strong>: le posizioni di base dello<strong>&nbsp;Shaolin</strong>, comune a diverse <strong>arti marziali</strong>, ma con i principi correlati e lo sviluppo di di radicamento e stabilità, necessari nel combattimento</li>
                        <li><strong>Forme moderne e forme tradizionali </strong>(<em><strong>t</strong><strong><em>ao</em> lu</strong></em>): lavoro sulle forme, la <strong>forma</strong> è una serie concatenata di movimenti che simulano un <strong>combattimento</strong> (viene svolta singolarmente)</li>
                        <li><strong>Leve articolari</strong> (<strong><em>qinna</em></strong>): <strong>tecniche</strong> per potersi svincolare da una presa di vario tipo.</li>
                        <li><strong>Proiezioni sul posto e in movimento</strong>: per liberarsi dalla presa di un aggressore.</li>
                        <li><strong>Tecniche di pugno</strong>: gli elementi di base dell’<strong>arte marziale cinese</strong> e i principi nascosti (<em>quan fa</em>)</li>
                        <li><strong>Tecniche di calcio</strong>: dai calci di base fino ai calci più acrobatici, fondamentale è il lavoro sull’efficacia della tecnica da associare alle caratteristiche del praticante (come diciamo sempre nella nostra Scuola è l’<strong>arte marziale</strong> che si adatta al praticante, non il contrario).</li>
                        <li><strong>Difesa personale</strong>: tecniche che vanno “in soccorso” al praticante nel caso di attacchi improvvisi e inaspettati.</li>
                        <li><strong>Combattimento</strong>:&nbsp;definito <Link href="https://www.kungfuscuolaxindao.it/sanda/"><strong>sanda</strong></Link> o <strong>sanshou</strong>, prevede lo studio della guardia, della distanza, dell’approccio con l’avversario, degli attacchi, del timing, della chiusura.</li>
                        <li>In aggiunta: <Link href="https://www.kungfuscuolaxindao.it/armi-kung-fu/"><strong>studio delle armi tradizionali</strong></Link> per avere un bagaglio marziale completo al 100%.</li>
                    </ul>
                    <p>
                        Questi elementi - insieme a <Link href="/blog/articles/principi_kungfu"><strong>principi del
                        Kung Fu</strong></Link> - sono la "chiave" per fornire un bagaglio marziale completo a 360° al
                        praticante e stanno alla base dei programmi di una <Link href="https://www.kungfuscuolaxindao.it/scuola-kung-fu-milano/"><strong>Scuola
                        di Kung Fu</strong></Link> seria. Diffida da chi lavora solo un elemento o tralascia informazioni
                        qua e là.
                    </p>
                    <p>
                        In questa Guida Completa ho risposto a diverse domande: <strong>che cos’è il Kung Fu</strong>; le
                        definizioni più importanti; gli stili più conosciuti e praticati delle <strong>arti marziali
                        cinesi</strong> e gli elementi della pratica.
                    </p>
                    <p>
                        Se sei di Milano prenota una lezione presso i corsi della nostra Associazione oppure scopri
                        il <Link href="https://www.kungfuscuolaxindao.it/corsi-kung-fu/istruttore-di-kung-fu/"><strong>corso
                        formativo italiano per diventare Allenatore di Kung Fu Shaolin</strong></Link>.
                    </p>
                    <p>
                        Maestro <Link href="/scuola/maestro_gamuzza/">Marco Gamuzza</Link>
                    </p>
                </div>
            </BoilerPlate>
        </Layout>
    );
}