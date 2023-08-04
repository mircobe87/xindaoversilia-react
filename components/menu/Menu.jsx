import styles from './menu.module.css';
import clsx from 'clsx';
import React from 'react';
import MenuEntry from './MenuEntry';
import SubMenu from './SubMenu';

import { GrMenu } from 'react-icons/gr';
import { useState } from 'react';

export default function Menu({children}) {
    const [ open, setOpen ] = useState(false);
    const [ openSubmenuName, setOpenSubmenuName ] = useState(null);

    let containerClasses = clsx({
        [styles.container] : true,
        [styles.open] : open
    });

    function toggleMenu() {
        setOpen(!open);
    }

    function onSubMenuClick(subMenuName) {
        setOpenSubmenuName(openSubmenuName == subMenuName ? null : subMenuName);
    }

    return (
        <>
            <button className={styles.burger} onClick={toggleMenu}>
                <GrMenu></GrMenu>
            </button>
            <div className={containerClasses}>
                <MenuEntry name="Home" href="/"></MenuEntry>
                <SubMenu name="Corsi" currentOpenedSubMenu={openSubmenuName} onClick={onSubMenuClick}>
                    <MenuEntry name="Corso Per Adulti" href="/corsi/adulti"></MenuEntry>
                    <MenuEntry name="Corso Per Bambini" href="/corsi/bambini"></MenuEntry>
                </SubMenu>
                <SubMenu name="Scuola" currentOpenedSubMenu={openSubmenuName} onClick={onSubMenuClick}>
                    <MenuEntry name="Scuola Xin Dao" href="/scuola/xin_dao"></MenuEntry>
                    <MenuEntry name="Maestro Federico Dazzini" href="/scuola/maestro_dazzini"></MenuEntry>
                    <MenuEntry name="Maestro Marco Gumazza" href="/scuola/maestro_gumazza"></MenuEntry>
                    <MenuEntry name="Maestro Yang Linsheng" href="/scuola/maestro_linsheng"></MenuEntry>
                    <MenuEntry name="Maestri Del Passato" href="/scuola/maestri_passato"></MenuEntry>
                    <MenuEntry name="Sistema Dei Gradi" href="/scuola/gradi"></MenuEntry>
                    <MenuEntry name="Organigramma" href="/scuola/organigramma"></MenuEntry>
                    <MenuEntry name="Statuto" href="/scuola/statuto"></MenuEntry>
                </SubMenu>
                <SubMenu name="Stili" currentOpenedSubMenu={openSubmenuName} onClick={onSubMenuClick}>
                    <MenuEntry name="Kung Fu" href="/stili/kung_fu"></MenuEntry>
                    <MenuEntry name="Shaolin Quan" href="/stili/shaolin_quan"></MenuEntry>
                </SubMenu>
                <MenuEntry name="Kung Fu Blog" href="/blog/blog-index"></MenuEntry>
                <SubMenu name="Eventi" currentOpenedSubMenu={openSubmenuName} onClick={onSubMenuClick}>
                    <MenuEntry name="Lista Eventi" href="/eventi/lista"></MenuEntry>
                    <MenuEntry name="Calendario" href="/eventi/calendario"></MenuEntry>
                </SubMenu>
            </div>
        </>
    );
}