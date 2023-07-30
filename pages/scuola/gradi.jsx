import Layout from "../../components/layout/Layout";
import BoilerPlate from "../../components/layout/BoilerPlate";

import Image from "next/image";

import styles from "./gradi.module.css";
import Link from "next/link";

const title = "Sistema Dei Gradi";
const description = "";

export default function() {
    return (
        <Layout title={title} description={description}>
            <BoilerPlate>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h1>Il sistema gradi</h1>
                        <p>Gradi e cinture nel Kung Fu</p>
                    </div>
                    <div className={styles.flexRow}>
                        <div>
                            <p>
                                Molte discipline marziali oggi hanno un loro <strong>sistema di gradi e di cinture</strong> al
                                fine di classificare i diversi praticanti in base al livello di abilità acquisita, ma un tempo
                                le cose erano diverse.
                            </p>
                            <p>
                                Tradizionalmente i <strong>Maestri cinesi</strong> non accettavano più di un manipolo di allievi
                                e seguivano passo passo ognuno di essi, l’<strong>abilità marziale</strong> di ogni studente
                                era infatti monitorata giorno per giorno dal <strong>Maestro</strong>, che non aveva così la
                                necessità di divedere le lezioni in gruppi o in percorsi differenti.
                            </p>
                            <p>
                                Inoltre, anche la mentalità ha subito qualche mutamento, basti pensare che spesso chi volesse
                                studiare <Link href=""><strong>Kung Fu</strong></Link> con
                                un determinato maestro doveva mostrarsi paziente e tenace, magari allenare una sola tecnica
                                fondamentale per diversi anni prima che lo shifu gli aprisse le porte ai "segreti" del suo
                                sistema.
                            </p>
                        </div>
                        <div>
                            <Image src="/images/gradi/cinture_kung_fu.jpg" alt="cinture kung fu" width={462} height={308} priority placeholder="empty"></Image>
                        </div>
                    </div>
                    <div>
                        <p>
                            Ecco perché non si usavano <strong>cinture</strong> diverse per ogni livello, o se c’erano, si dividevano
                            solo in <strong>cintura bianca</strong> e <strong>cintura nera</strong>, che determinava il passaggio dello
                            studente da normale praticante a studente avanzato, conoscitore dello stile o addirittura discepolo del maestro.
                        </p>
                        <p>
                            Oggi le cose sono cambiate: le palestre (o <em><strong>wushu guan</strong></em>) spesso vantano numerosi
                            praticanti, che durante le lezioni svolgono esercizi diversi in base al loro livello di abilità. L’istruttore o
                            il Maestro che sia quindi, deve poter individuare con facilità gli studenti in base alla loro comprensione del
                            metodo, per poter dar loro indicazioni sugli esercizi da svolgere.
                        </p>
                        <p>
                            Un altro motivo è che per noi ogni <strong>esame</strong> per la cintura successiva costituisce un forte stimolo
                            per i praticanti, soprattutto per i bambini e i ragazzi e il passaggio di grado è sempre una meta ambita e un
                            obiettivo importante da raggiungere lungo il nostro Dao, la nostra <strong>Via sul percorso delle arti
                            marziali</strong>.
                        </p>
                    </div>
                </div>
            </BoilerPlate>

            <BoilerPlate className={styles.boilerPlateAdulti}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>I gradi nel corso adulti</h2>
                    </div>
                    <p>
                        Come abbiamo detto ogni <strong>stile</strong> ha un suo sistema che può variare di molto.&nbsp;Nella nostra scuola
                        il <strong>sistema dei gradi di Kung Fu <Link href="https://www.kungfuscuolaxindao.it/shaolin/">Shaolin</Link></strong>, in
                        cinese "<em><strong>ji</strong></em>", sono costituiti da uno stemma rappresentante l’ideogramma "<em><strong>wu</strong></em>".
                        Esso è da applicare sulla cintura bianca, per ogni livello si tolgono i ji precedenti per lasciare spazio a quelli futuri,
                        sono 7 e si dividono su tre livelli:
                    </p>
                </div>

                <div className={styles.container}>
                    <div className={styles.tableTitle}>livello base</div>
                    <div className={styles.flexRow}>
                        <div>
                            <div><Image src="/images/gradi/cintura-bianca.png" height={200} width={200} alt="cintura bianca"></Image></div>
                            <div>
                                <p><strong>Cintura bianca</strong></p>
                                <p>
                                    La <strong>cintura bianca</strong> è la cintura che il praticante indossa fin dalla prima lezione e
                                    che rappresenta l’inizio del suo percorso. Il bianco è il <em>wuji</em>, letteralmente vuoto che in
                                    realtà è il terreno su cui seminare la conoscenza che verrà.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div><Image src="/images/gradi/grado-1-ji.png" height={200} width={200} alt="grado 1 ji"></Image></div>
                            <div>
                                <p><strong>Grado I Ji</strong></p>
                                <p>
                                    Tutti i gradi vengono illustrati con il carattere <em>Wu</em>, che significa <em>arte marziale</em> (Wu di Wushu).
                                    Il <strong>grado di I Ji</strong> si ottiene durante la pratica dopo circa 4 mesi. Nella cultura cinese il
                                    nero rappresenta l’acqua, elemento yin che dà inizio alla vita.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div><Image src="/images/gradi/grado-2-ji.png" height={200} width={200} alt="grado 2 ji"></Image></div>
                            <div>
                                <p><strong>Grado II Ji</strong></p>
                                <p>
                                    Con il <strong>grado di II Ji</strong> il praticante ha acquisito le abilità basilari e si avvia allo studio
                                    delle forme dello stile, iniziando a comprenderne anche le applicazioni in coppia con il compagno.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div><Image src="/images/gradi/grado-3-ji.png" height={200} width={200} alt="grado 3 ji"></Image></div>
                            <div>
                                <p><strong>Grado III Ji</strong></p>
                                <p>
                                    In seguito all’ottenimento del <strong>III Ji</strong> il praticante conclude il primo ciclo di studio
                                    in cui sedimenta la costruzione delle basi dello stile, la comprensione dei movimenti, la base delle leve
                                    articolari e degli spostamenti essenziali.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.container}>
                    <div className={styles.flexRow}>
                        <div>
                            <div className={styles.tableTitleRed}>livello fondamentale</div>
                            <div className={styles.flexRow}>
                                <div>
                                    <div><Image src="/images/gradi/grado-4-ji.png" height={200} width={200} alt="grado-4-ji.png"></Image></div>
                                    <div>
                                        <p><strong>Grado IV Ji</strong></p>
                                        <p>
                                            Il <strong>grado di IV Ji</strong> è contrassegnato dal Ji di colore rosso che rappresenta il fuoco,
                                            un elemento yang. Nella cultura cinese il fuoco fa riferimento alla forza, alla dinamicità e al coraggio.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div><Image src="/images/gradi/grado-5-ji.png" height={200} width={200} alt="grado 5 ji"></Image></div>
                                    <div>
                                        <p><strong>Grado V Ji</strong></p>
                                        <p>
                                            Il <strong>grado di V Ji</strong> è in linea con la spiegazione del grado precedente, il praticante inizia
                                            a fare uno studio più mirato lavorando anche sulla sua capacità di espressione.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div><Image src="/images/gradi/grado-6-ji.png" height={200} width={200} alt="grado 6 ji"></Image></div>
                                    <div>
                                        <p><strong>Grado VI Ji</strong></p>
                                        <p>
                                            Con il grado di<strong> VI Ji</strong> l’allievo ha completato i due cicli corrispondenti ai due
                                            elementi di acqua e fuoco, interdipendenti ma distinti.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className={styles.tableTitleRed}>livello accurato</div>
                            <div className={styles.flexRow}>
                                <div>
                                    <div><Image src="/images/gradi/grado-7-ji.png" height={200} width={200} alt="grado 7 ji"></Image></div>
                                    <div>
                                        <p><strong>Grado VII Ji</strong></p>
                                        <p>
                                            Con il conseguimento del <strong>VII Ji</strong> il praticante ha una prima consapevolezza dello stile
                                            e delle sue specialità, questo lo porta ad affinare maggiormente tutto ciò che ha imparato.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BoilerPlate>

            <BoilerPlate className={styles.boilerPlateDuan}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h3>I gradi superiori - Duan</h3>
                    </div>
                    <div className={styles.flexRow}>
                        <div>
                            <div className={styles.tableTitle}>livello intermedio</div>
                            <div className={styles.flexRow}>
                                <div>
                                    <div><Image src="/images/gradi/grado-cintura-nera.png" height={200} width={200} alt="cintura nera"></Image></div>
                                    <div>
                                        <p><strong>Cintura nera</strong></p>
                                        <p>
                                            Nella nostra scuola la <strong>cintura nera</strong> rappresenta <strong>un primo passo per addentrarsi
                                            alla Via</strong>, nel cuore del Kung Fu tradizionale. Con l’ottenimento della cintura nera il praticante
                                            consolida la conoscenza pregressa degli stili esterni accedendo anche allo studio dello stile Tang Lang
                                            Quan (mantide religiosa) e ha accesso ad uno studio di livello superiore con gli stili interni come l’Yi
                                            Quan (studio delle prime due fasi e del Tui Shou).
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div><Image src="/images/gradi/grado-1-duan.png" height={200} width={200} alt="1 duan"></Image></div>
                                    <div>
                                        <p><strong>I Duan</strong></p>
                                        <p>
                                            Lo studio che porta al <strong>I Duan</strong> comprende la conoscenza relativa alla biomeccanica del corpo,
                                            lo sviluppo della sensibilità per esempio grazie alla pratica del Tui Shou e il lavoro sulla forza esplosiva.
                                            Da questo punto in poi il praticante assapora le prime ricchezze della disciplina interna e le prime
                                            evoluzioni che ne conseguono.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.tableTitle}>livello medio-alto</div>
                            <div className={styles.flexRow}>
                                <div>
                                    <div><Image src="/images/gradi/grado-2-duan.png" height={200} width={200} alt="2 duan"></Image></div>
                                    <div>
                                        <p><strong>II Duan</strong></p>
                                        <p>
                                            In questa fase del percorso, il praticante interiorizza lo studio precedente e inizia ad avere una valida
                                            competenza negli stili superiori come l’Yi Quan e lo Xing Yi Quan. Per esempio con i 5 elementi dello Xing
                                            Yi il praticante apprenderà le varie forze che caratterizzano questo stile.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div><Image src="/images/gradi/grado-3-duan.png" height={200} width={200} alt="3 duan"></Image></div>
                                    <div>
                                        <p><strong>III Duan</strong></p>
                                        <p>
                                            Dal <strong>III Duan</strong> l’allievo si inoltra nel cuore degli stili interni, Xing Yi e Yi Quan.
                                            Di quest’ultimo approfondisce ogni singolo aspetto del Metodo che tra i vari elementi comprende: i cinque
                                            pugni, i cinque palmi, i 5 calci, gli spostamenti fulminei e i movimenti a spirale.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.container}>
                    <div className={styles.flexRow}>
                        <div>
                            <div className={styles.tableTitle}>livello avanzato</div>
                            <div className={styles.flexRow}>
                                <div>
                                    <div><Image src="/images/gradi/grado-4-duan.png" height={200} width={200} alt="4 duan"></Image></div>
                                    <div>
                                        <p><strong>IV Duan</strong></p>
                                        <p>
                                            L’allievo che raggiunge il <strong>IV Duan</strong> ha una panoramica completa degli stili interni e
                                            approfondisce in particolare tutto il sistema dell’Yi Quan che va a completare e i primi 6 animali dello
                                            Xing Yi Quan (in totale sono 12) il drago, la tigre, la scimmia, il cavallo, il coccodrillo e il gallo.
                                            Durante questo grado si dà spazio anche alla fase dell’Yi Quan chiamata <em>Jianwu</em>, danza marziale
                                            spontanea.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div><Image src="/images/gradi/grado-5-duan.png" height={200} width={200} alt="5 duan"></Image></div>
                                    <div>
                                        <p><strong>V Duan</strong></p>
                                        <p>
                                            Giunto a questo livello, l’allievo ha decisamente concretizzato il suo percorso di crescita nelle arti
                                            marziali del metodo Xin Dao, esprimendo autonomia e istinto marziale.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.tableTitle}>livello esperto</div>
                            <div className={styles.flexRow}>
                                <div>
                                    <div><Image src="/images/gradi/grado-6-duan.png" height={200} width={200} alt="6 duan"></Image></div>
                                    <div>
                                        <p><strong>VI Duan</strong></p>
                                        <p>
                                            Livello di grande padronanza e spontaneità di tutte le materie di studio precedenti e successive alla
                                            cintura nera, sia da un punto di vista tecnico che culturale/filosofico.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.container}>
                    <div className={styles.tableTitle}>livello di eccellenza</div>
                    <div>
                        <p><strong>VII-VIII-IX Duan</strong></p>
                        <p>
                            I gradi di eccellenza marziale VII-VIII e IX Duan vengono rilasciati soltanto a coloro che hanno dedicato tutta la
                            vita al metodo di Kung Fu della Scuola Xin Dao, praticando ed effettuando continue ricerche sulla Via e sulla
                            disciplina.
                        </p>
                    </div>
                </div>
            </BoilerPlate>

            <BoilerPlate>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>I gradi nel corso bambini</h2>
                    </div>
                    <h3>Corso baby</h3>
                    <p>
                        Il corso dei più piccoli (corso baby), è diviso in soli 3 ji (gradi) verdi, in quanto relativamente semplice.
                        Oltre a svolgere un lavoro base di wushu kung fu, il corso mira in particolare a migliorare le capacità
                        motorie del bambino, la sua coordinazione. Cercando di donargli consapevolezza del proprio sé nello spazio,
                        in movimento, e in mezzo agli altri. Oltre all’assimilazione di regole comportamentali fondamentali.
                    </p>
                    <div>
                        <Image src="/images/gradi/grado-1-ji-verde.png" alt="1 ji verde" height={180} width={180}></Image>
                        <Image src="/images/gradi/grado-2-ji-verde.png" alt="2 ji verde" height={180} width={180}></Image>
                        <Image src="/images/gradi/grado-3-ji-verde.png" alt="3 ji verde" height={180} width={180}></Image>
                    </div>

                    <h3>Corso junior</h3>
                    <p>
                        Il corso junior invece è più articolato. Il bambino ormai ha un’età che gli permette di svolgere
                        sequenze motorie più complesse, può essere introdotto in un’ottica più seria ed è in grado di
                        capire più consapevolmente insegnamenti comportamentali e disciplinari.
                        <br/>Per questi motivi il programma tecnico è più complesso e richiede una suddivisione maggiore,
                        simile a quella del corso adulti:
                    </p>
                    <h4>Primo livello</h4>
                    <p>È costituito da 3 ji gialli, uguali a quelli del corso adulti se non per il colore.</p>
                    <div>
                        <Image src="/images/gradi/grado-1-ji-giallo.png" alt="1 ji giallo" height={180} width={180}></Image>
                        <Image src="/images/gradi/grado-2-ji-giallo.png" alt="2 ji giallo" height={180} width={180}></Image>
                        <Image src="/images/gradi/grado-3-ji-giallo.png" alt="3 ji giallo" height={180} width={180}></Image>
                    </div>

                    <h4>Cintura gialla</h4>
                    <p>
                        La <strong>cintura gialla</strong> rappresenta il primo grande successo di un bambino, è la versione
                        junior della cintura nera, oltre la quale si possono affrontare ulteriori esami. Si potrà arrivare ad
                        avere fino un massimo di altri 3 ji gialli sopra la cintura gialla.
                    </p>
                    <div>
                        <Image src="/images/gradi/grado-cintura-gialla.png" alt="cintura gialla" height={180} width={180}></Image>
                    </div>

                    <h4>Cintura gialla con Ji</h4>
                    <p>
                        Dopo aver conseguito la cintura gialla, il giovane praticante si cimenterà con sequenze più complesse
                        che lo renderanno ancora più coordinato, aumentandone la concentrazione e la disciplina.
                    </p>
                    <div>
                        <Image src="/images/gradi/grado-1-ji-giallo-cintura-gialla.png" alt="cintura gialla 1 ji" height={180} width={180}></Image>
                        <Image src="/images/gradi/grado-2-ji-giallo-cintura-gialla.png" alt="cintura gialla 2 ji" height={180} width={180}></Image>
                        <Image src="/images/gradi/grado-3-ji-giallo-cintura-gialla.png" alt="cintura gialla 3 ji" height={180} width={180}></Image>
                    </div>
                    <p>
                        Inoltre, questo è un percorso propedeutico per lo studio tradizionale del Kung Fu all’interno della categoria
                        adulti, che avviene di solito dai 14 anni in su.
                    </p>
                </div>
            </BoilerPlate>

            <BoilerPlate className={styles.boilerPlateSimbologia}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>Simbologia dei colori nei gradi (adulti e bambini)</h2>
                    </div>
                    <div>
                        <div>
                            <h3>Bianco</h3>
                            <Image src="/images/gradi/Cintura_bianca.png" alt="cintura shaolin" height={80} width={80}></Image>
                            <p>
                                Il <b>colore bianco, lo sfondo dei Ji fino al VI°</b> nel corso adulti, rappresenta il vuoto e lo
                                spazio che il praticante ha a disposizione per colmarlo di conoscenza e di sapere. E' il <b><i>wuji</i></b>,
                                che secondo la cosmogonia cinese descrive il vuoto primigenio antecedente il tempo della creazione del mondo.
                                Nel <strong>Kung Fu</strong> simboleggia inoltre lo stato assolutamente neutro che prelude l’inizio della lotta.
                            </p>
                        </div>

                        <div>
                            <h3>Verde</h3>
                            <Image src="/images/gradi/Ji-Verde.png" alt="le cinture nelle arti marziali" height={80} width={80}></Image>
                            <p>
                                Come una pianta che cresce e si sviluppa, irrobustendosi e crescendo, anche il piccolo allievo baby può essere
                                comparato metaforicamente ad una pianta.
                            </p>
                            <p>
                                Il verde simboleggia il germoglio, lo stadio iniziale di un percorso di crescita lungo e costante proprio come
                                l’evoluzione del piccolo allievo fino a diventare un artista marziale.
                            </p>
                        </div>

                        <div>
                            <h3>Giallo</h3>
                            <Image src="/images/gradi/Ji-Giallo.png" alt="gradi kung fu bambini" height={80} width={80}></Image>
                            <p>
                                Il germoglio cresce, trasformandosi piano piano in un albero ancora giovane.<br/>Inizia a formare solide radici
                                che lo aiuteranno a stare eretto ed a sostenersi ed a sviluppare i rami.
                            </p>
                            <p>
                                Così il giallo simboleggia l’allievo Junior che cresce, ed ha assimilato i fondamentali facendolo arrivare al
                                primo livello, preparandolo per il corso adulti.
                            </p>
                        </div>

                        <div>
                            <h3>Nero</h3>
                            <Image src="/images/gradi/Ji-Nero1.png" alt="grado kung fu" height={80} width={80}></Image>
                            <p>
                                Il nero è il colore dei <b>primi 3 ji</b> (su sfondo bianco) ed è il colore dell’acqua, elemento yin e quindi
                                femminile, che dà inizio alla vita. Permette di modellare il praticante in armonia con se stesso e la natura,
                                senza forzature. <span>L’acqua in natura è un elemento calmo ed equilibrato se lasciato fermo. Ha un grande
                                potenziale destinato a manifestarsi sotto l’influenza dell’elemento fuoco che la sollecita.</span>
                            </p>
                            <p>Virtù connesse all’elemento acqua: Calma - temperanza - adattabilità - equilibrio.</p>
                        </div>

                        <div>
                            <h3>Rosso</h3>
                            <Image src="/images/gradi/Ji-Rosso.png" alt="livelli di kung fu" height={80} width={80}></Image>
                            <p>
                                Dal <b>secondo livello</b> gli ideogrammi sul Ji sono di colore rosso (su sfondo bianco), è il secondo passaggio di crescita,
                                caratterizzato dal fuoco che è un elemento yang, e quindi maschile. Il fuoco rappresenta la potenza espressa, la parte
                                dinamica, l’elemento che tutto permea e tutto vivifica. <span>Il fuoco però potrebbe creare un’azione pericolosa se non
                                fosse moderato dall’acqua.</span>
                            </p>
                            <p>
                                Virtù connesse all’elemento fuoco: Rapidità - dinamicità - coraggio - forza combattiva estrema.
                            </p>
                        </div>

                        <div>
                            <h3>Rosso su nero</h3>
                            <Image src="/images/gradi/Ji-Nero-Rosso.png" alt="livelli avanzati di kung fu" height={80} width={80}></Image>
                            <p>
                                Il <b>VII° Ji</b> è un ideogramma nero con sfondo rosso. Esso rappresenta l’unione, la fusione e l’equilibrio che
                                rende <Link href=""><strong>yin e yang</strong></Link> perennemente vitali,
                                perennemente opposti ma primordiali; attraverso loro prendono vita tutti gli altri elementi.
                            </p>
                            <p>
                                Nel <strong>Kung Fu</strong> simboleggia il punto in cui si ha controllo delle due forze opposte.
                                Veicolandole ed esprimendole solo nei momenti adatti; senza essere spinti da istinti privi di controllo o viceversa
                                senza cadere nella passività.
                            </p>
                        </div>
                    </div>
                </div>
            </BoilerPlate>
        </Layout>
    );
}