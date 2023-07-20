import styles from '../styles/index.module.css';

import Layout from '../components/layout/Layout';
import BoilerPlate from '../components/layout/BoilerPlate';

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
            <h2>Il Kung fu a Milano</h2>
            <h1>Che cos’è Kung Fu Xin Dao?</h1>
            <p>
              <b>La Scuola di Kung Fu Xin Dao è una scuola attiva a Milano</b> divenuta
              un punto di riferimento nel territorio per lo studio delle arti marziali cinesi.
            </p>
            <p>
              I nostri corsi di Kung Fu a Milano per adulti e bambini offrono
              una formazione e un <b>bagaglio marziale</b> completi, grazie ad un <b>team
              di istruttori di arti marziali qualificati</b> e attestati, guidato dalla
              ventennale esperienza del Maestro Marco Gamuzza V Duan di Shaolin, Yi Quan e Tai Chi.
            </p>
            <p>
              La nostra scuola di Kung Fu ha una struttura ben definita,
              caratterizzata da programmi studiati e comprovati dal Direttore tecnico
              Maestro Marco Gamuzza e dal Gran Maestro Yan Lin Sheng, famoso a livello
              internazionale per lo studio degli stili interni Yi Quan e Tai Chi;
              avanzamenti di livello periodici, con la possibilità di svolgere esami e gare;
              possibilità di partecipare a stage e a seminari.
            </p>
            <p>
              Dal 2021 la Scuola Xin Dao entra a far parte del Comitato tecnico scientifico
              della Regine Lombardia, nel settore delle Discipline Bio Naturali
              (Legge Regionale n. 2/2005).
            </p>
          </div>
          <div>
            <h2>Il programma più completo di arti marziali cinesi</h2>
            <h1>Perché scegliere la nostra scuola?</h1>
            <p>
              Offriamo corsi di Kung Fu per adulti e bambini, caratterizzati da un
              programma esclusivo e strutturato per livelli, affinché tu possa sviluppare
              un’ottima preparazione fisica e marziale e constatare tu stesso/a un miglioramento costante.
            </p>
            <p>I nostri corsi di Kung Fu a Milano ti garantiscono un allenamento fisico, seguendo la tradizione dell’arte marziale cinese, apprenderai il lavoro sulle forme del Kung Fu, la difesa personale, le tecniche in coppia di leve articolari e di proiezione, i calci, le tecniche di percussione.</p>
            <p>Il programma dei nostri corsi di Kung Fu per adulti e bambini conferisce così – attraverso l’automatismo delle tecniche – un’eccellente reazione marziale. Ti proponiamo corsi di arti marziali cinesi a Milano per adulti e bambini accessibili a chiunque, dai principianti ai livelli avanzati.</p>
            <p>Scopri l’autentico Kung Fu-Wushu.</p>
          </div>
        </div>
        <div className={styles.bottomSeparator}></div>
      </BoilerPlate>
    </Layout>
  );
}
