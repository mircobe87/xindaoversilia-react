import styles from '../styles/index.module.css';

import Layout from '../components/layout/Layout';
import BoilerPlate from '../components/layout/BoilerPlate';
import Link from 'next/link';
import Image from 'next/image';
import { BsPinMapFill, BsFillClockFill } from 'react-icons/bs';

export const title = "Kung Fu XinDao Versilia";
export const description = "Scuola di Kung Fu tradizionale in Versilia";

export default function Home() {
  return (
    <Layout title={title} description={description}>
      <BoilerPlate>
        <div className={styles.cover}>
          <h1>{title}</h1>
          <h2>{description}</h2>
          <p>Tramandare l’arte marziale cinese tradizionale nella sua essenza più pura, scientifica ed efficace.</p>
        </div>
        <div className={styles.topSeparator}></div>
        <div className={styles.columnsContainer}>
          <div>
            <h2>Facciamo un po' di chiarezza</h2>
            <h1>Kung Fu, Gong Fu, Wushu</h1>
            <p>
              Con il termine <strong>Kung Fu</strong>, <strong>Gong Fu</strong> o
              anche <strong>Wushu</strong>, si intende l'arte marziale cinese comprendente
              la totalità delgli stili marziali lì nati, ad oggi diventati
              patrimonio nazionale.</p>
            <p>
              In origine, il termine <strong>Kung Fu</strong> (o <strong>Gong Fu</strong>)
              rappresentava la capacità di eseguire un compito o un'attività grazie alle
              abilità acquisite nel tempo con esercizio e <strong>duro lavoro</strong>; come
              l'addestrarsi al combattimento con armi e a mani nude. Un tempo, aquisire l'abilità
              di difendersi era considerata molto importante, forse questo ha
              portato la parola <strong>Kung Fu</strong> ad assumere anche il significato
              di <Link href="/blog/articles/arti_marziali"><strong>arte marziale</strong></Link>.</p>
            <p>
              Oggi, nella società moderna, il <strong>Wushu</strong> tradizionale è
              praticato soprattutto come metodo salutistico e di ricerca psicofisica, per
              quanto l'aspetto marziale sia ancora presente, con gradazioni diverse, in
              molte scuole.</p>
            <p>
              Per orientarsi meglio nella <Link href="/blog/articles/kungfu"><strong>varietà
              delle arti marziali cinesi</strong></Link>, possiamo suddividere i vari stili in due
              grandi famiglie, stili interni ed esterni, per il tipo di energia utilizzata
              per contrastare l'avversario: energia vitale e profonda (<strong>Qi</strong>) o forza muscolare.
              Un'altra suddivisione può essere fatta dal punto di vista geografico,
              considerando stili del Nord tutti quelli nati al di sopra del fiume Azzurro
              (<strong>Yangtze</strong>) e del Sud tutti quelli sviluppatisi al di sotto.</p>
            <p>
              Nella nostra scuola insegnamo quello stile del Nord che è considerato il più
              importante tra gli stili esterni e quindi punto di partenza fondamentale per chi
              si approccia allo studio delle arti
              marziali: <Link href="/blog/articles/shaolinquan"><strong>Shaolin Quan</strong></Link> (少林拳).</p>
          </div>

          <div>
            <h2>La nostra scuola e i nostri corsi</h2>
            <h1>Scuola Xin Dao Versilia</h1>
            <p>
              La nostra scuola di <strong>Kung Fu Xin Dao Versilia</strong> è un’Associazione Sportiva
              Dilettantistica, prende il nome dal termine cinese Xin Dao, che significa <em>La Via del
              Cuore e della Mente</em>.</p>
            <p>
              L'allenamento del Wushu si fonda su <strong>otto metodi</strong> (bāfǎ 八法), cioè:</p>
              <ol>
                <li>braccia (<strong>shǒu</strong> 手)</li>
                <li>occhi (<strong>yǎn</strong> 眼)</li>
                <li>tecnica del corpo (<strong>shēnfǎ</strong> 身法)</li>
                <li>passi e posizioni (<strong>bù</strong> 步)</li>
                <li>concentrazione (<strong>jīngshén</strong> 精神)</li>
                <li>energia/fiato (<strong>qì</strong> 气)</li>
                <li>forza (<strong>lì</strong> 力)</li>
                <li>abilità/allenamento (<strong>gōng</strong> 功)</li>
              </ol>
            <p>
              I primi quattro metodi si riferiscono all'uso del <strong>corpo</strong> (braccia, gambe,
              tronco, sguardo); gli altri quattro allo sviluppo delle
              abilità <strong>psicofisiche</strong> necessarie a rendere la tecnica efficace.</p>

            <p>
              Per questo la nostra scuola offre al marzialista la possibilità di crescere a tuttotondo
              partendo da basi solide allenando corpo e mente (o cuore).</p>

            <p>
              Offriamo corsi di Kung Fu <Link href="/blog/articles/shaolinquan"><strong>Shaolin
              Quan</strong></Link> tradizionale per <Link href="/corsi/adulti"><strong>adulti</strong></Link> (dai 14 ai 65 anni)
              e <Link href="/corsi/ragazzi"><strong>ragazzi</strong></Link> (dai 7 ai 13 anni) sotto la
              guida dell'istruttore <Link href="/scuola/maestro_dazzini"><strong>Federico Dazzini</strong></Link> allievo
              del <Link href="/scuola/maestro_gamuzza"><strong>Maestro Marco Gamuzza</strong></Link> a sua volta allievo
              testamentario del <Link href="/scuola/maestro_linsheng"><strong>Gran Maestro Yan Lin Sheng</strong></Link>.</p>
          </div>
        </div>
        <div className={styles.bottomSeparator}></div>

        <div className={styles.corsoPreviewContainer}>
          <h1>Corsi di arti marziali cinesi per ragazzi</h1>
          <h2>Educazione del corpo. Concentrazione. Austostima</h2>
          <div className={styles.corsoPreviewBody}>
            <Image src="/images/corso-di-kung-fu-per-bambini-milano-1024x693-1.jpg" alt="Corso per Ragazzi" width={480} height={320}/>
            <div>
              <h3>Corso di Kung Fu Shaolin ragazzi per 7-13 anni</h3>
              <p><BsPinMapFill/>&nbsp;Via Ugo la Malfa, 7 Paderno Dugnano (Milano)</p>
              <p><BsFillClockFill/>&nbsp;Lun 18.30-19.30 - Ven 18.00-19.00</p>
              <p>
                Nel corso junior il giovane praticante si affaccia all’arte marziale in modo più completo. Attraverso lezioni
                mirate sviluppa un’ottima padronanza del suo corpo, accresce la sua capacità di socializzare con gli altri e
                migliora le capacità motorie e di autodifesa.
              </p>
              <p><Link href="/corsi/ragazzi">Guarda il Programma</Link></p>
            </div>
          </div>
        </div>

        <div className={styles.corsoPreviewContainer}>
          <h1>Corsi di arti marziali cinesi per adulti</h1>
          <h2>Forma Fisica. Autodifesa. Sicurezza in te stesso/a.</h2>
          <div className={styles.corsoPreviewBody}>
            <Image src="/images/corso-shaolin-adulti.jpeg" alt="Corso Shaolin Adulti" width={480} height={320}/>
            <div>
              <h3>Corso di Kung Fu Shaolin per adulti</h3>
              <p><BsPinMapFill/>&nbsp;Via Ugo la Malfa, 7 Paderno Dugnano (Milano)</p>
              <p><BsFillClockFill/>&nbsp;Lun-Ven / 19.30-21.00</p>
              <p>
                Il Corso di Kung Fu per adulti è stato sviluppato per farti compiere un vero e proprio percorso dentro e fuori di
                te, lavorando sulla tua preparazione fisica, sullo sviluppo del tuo focus mentale e sulla tua sicurezza in te
                stesso/a aumentando così il tuo potenziale inespresso.
              </p>
              <p><Link href="/corsi/adulti">Guarda il Programma</Link></p>
            </div>
          </div>
        </div>
      </BoilerPlate>
      <BoilerPlate className={styles.mapBoilerPlate}>
        <div className={styles.mapFooter}>
          <div>
            <h1>Dove si svolgono i corsi</h1>
            <p>Palestra Gramsci -&nbsp;Via Ugo la Malfa, 7</p>
            <p>20037 Paderno Dugnano (Milano)</p>
            <p>Tel. 02 9192 0562</p>
            <p>Prenota una lezione GRATUITA di Kung Fu a Milano.</p>
          </div>
          <div>
            <a href="https://goo.gl/maps/HoEJn6gNc2CQ8byn7" target="_blank">
              <Image src="/images/map.png" alt="mappa" width={480} height={320}></Image>
              <p><em>Cliccando sull’immagine si aprirà Google Maps</em></p>
            </a>
          </div>
        </div>
      </BoilerPlate>
    </Layout>
  );
}
