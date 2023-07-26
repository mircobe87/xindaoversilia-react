import styles from './submenu.module.css';
import clsx from 'clsx';

import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { useState } from 'react';

export default function SubMenu({name, children}) {
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.container} >
            <div className={styles.containerTitle} onClick={() => setOpen(!open)}>
                <div>{name}</div>
                {open ? <BsChevronUp/> : <BsChevronDown/>}
            </div>
            <div className={clsx(styles.containerList, {[styles.visible]: open})}>{children}</div>
        </div>
    );
}