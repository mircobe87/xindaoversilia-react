import styles from './submenu.module.css';
import clsx from 'clsx';

import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

export default function SubMenu({name, currentOpenedSubMenu, onClick, children}) {

    const isOpen = name == currentOpenedSubMenu;

    return (
        <div className={styles.container}>
            <div className={styles.containerTitle} onClick={() => onClick(name)}>
                <div>{name}</div>
                {isOpen ? <BsChevronUp/> : <BsChevronDown/>}
            </div>
            <div className={clsx(styles.containerList, {[styles.visible]: isOpen})}>{children}</div>
        </div>
    );
}