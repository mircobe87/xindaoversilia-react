import styles from './titlebar.module.css';

import Image from 'next/image';
import Menu from './menu/Menu';
import MenuEntry from './menu/MenuEntry';
import SubMenu from './menu/SubMenu';
import BoilerPlate from './layout/BoilerPlate';

export default function TitleBar() {
    return (
        <BoilerPlate className={styles.boilerplate}>
            <div className={styles.container}>
                <Image src="/images/logo-xindao.png" width={300} height={82} alt="XinDao" priority placeholder="empty"></Image>
                <Menu>
                    <MenuEntry name="Home" href="/"></MenuEntry>
                    <SubMenu name="Corsi">
                        <MenuEntry name="Corso Per Adulti" href="/corsi/adulti"></MenuEntry>
                        <MenuEntry name="Corso Per Bambini" href="/corsi/bambini"></MenuEntry>
                    </SubMenu>
                    <SubMenu name="Scuola">
                        <MenuEntry name="Scuola Xin Dao" href="/scuola/xin_dao"></MenuEntry>
                        <MenuEntry name="Maestro Federico Dazzini" href="/scuola/maestro_dazzini"></MenuEntry>
                        <MenuEntry name="Maestro Marco Gumazza" href="/scuola/maestro_gumazza"></MenuEntry>
                        <MenuEntry name="Maestro Yang Linsheng" href="/scuola/maestro_linsheng"></MenuEntry>
                        <MenuEntry name="Maestri Del Passato" href="/scuola/maestri_passato"></MenuEntry>
                        <MenuEntry name="Sistema Dei Gradi" href="/scuola/gradi"></MenuEntry>
                        <MenuEntry name="Organigramma" href="/scuola/organigramma"></MenuEntry>
                        <MenuEntry name="Statuto" href="/scuola/statuto"></MenuEntry>
                    </SubMenu>
                    <SubMenu name="Stili">
                        <MenuEntry name="Kung Fu" href="/stili/kung_fu"></MenuEntry>
                        <MenuEntry name="Shaolin Quan" href="/stili/shaolin_quan"></MenuEntry>
                    </SubMenu>
                    <MenuEntry name="Kung Fu Blog" href="/blog/blog-index"></MenuEntry>
                    <SubMenu name="Eventi">
                        <MenuEntry name="Lista Eventi" href="/eventi/lista"></MenuEntry>
                        <MenuEntry name="Calendario" href="/eventi/calendario"></MenuEntry>
                    </SubMenu>
                </Menu>
            </div>
        </BoilerPlate>
    );
}