import styles from './footer.module.css';

import Link from 'next/link';
import Image from 'next/image';
import {BsFacebook, BsInstagram, BsYoutube} from 'react-icons/bs';
import BoilerPlate from './layout/BoilerPlate';

export default function Footer() {
    return (
        <BoilerPlate className={styles.boilerplate}>
            <div className={styles.recap}>
                <div>
                    <h1>contattaci</h1>
                    <p>Associazione Sportiva Dilettantistica Kung Fu Xin Dao</p>
                    <p>Via ******* n. 00, 00000 Pietrasanta - Lucca</p>
                    <p>Telefono: 0000 000000</p>
                    <p>Email: info@email.it</p>
                </div>
                <div>
                    <h1>pagine</h1>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li>Corsi</li>
                        <ul>
                            <li><Link href="/corsi/adulti">Corso per Adulti</Link></li>
                            <li><Link href="/corsi/bambini">Corso per Bambini</Link></li>
                        </ul>
                        <li>Scuola</li>
                        <ul>
                            <li><Link href="/scuola/xin_dao">Scuola Xin Dao</Link></li>
                            <li><Link href="/scuola/maestro_dazzini">Maestro Federico Dazzini</Link></li>
                            <li><Link href="/scuola/maestro_gumazza">Maestro Marco Gumazza</Link></li>
                            <li><Link href="/scuola/maestro_linsheng">Maestro Yang Linsheng</Link></li>
                            <li><Link href="/scuola/maestri_passato">Maestri Del Passato</Link></li>
                            <li><Link href="/scuola/sistema_gradi">Sistema Dei Gradi</Link></li>
                            <li><Link href="/scuola/organigramma">Organigramma</Link></li>
                            <li><Link href="/scuola/statuto">Statuto</Link></li>
                        </ul>
                        <li>Stili</li>
                        <ul>
                            <li><Link href="/stili/kung_fu">Kung Fu</Link></li>
                            <li><Link href="/stili/shaolin_quan">Shaolin Quan</Link></li>
                        </ul>
                        <li><Link href="/blog/blog-index">Kung Fu Blog</Link></li>
                        <li>Eventi</li>
                        <ul>
                            <li><Link href="/eventi/lista">Lista Eventi</Link></li>
                            <li><Link href="/eventi/calendario">Calendario</Link></li>
                        </ul>
                    </ul>
                </div>
                <div>
                    <div>
                        <h1>seguici sui social</h1>
                        <BsFacebook/><BsInstagram/><BsYoutube/>
                    </div>
                    <div>
                        <h1>ASSOCIAZIONE AFFILIATA AD</h1>
                        <Image src="/images/logo-acsi.png" width={180} height={84} alt='ACSI'></Image>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <p> Copyright © 2018-2023 Xin Dao è un marchio registrato presso l’ufficio di marchi e brevetti.
                    Tutti i diritti sono riservati.<br/>Le attività sportive organizzate da Kung Fu Scuola XIN DAO
                    sono riservate esclusivamente ai tesserati A.C.S.I.</p>
                <p><Link href="/">Privacy policy</Link> - <Link href="/">Cookie policy</Link> - <Link href="/">Privacy associati</Link></p>
            </div>
        </BoilerPlate>
    );
}