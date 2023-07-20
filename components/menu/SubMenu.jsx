import styles from './submenu.module.css';
import clsx from 'clsx';

import { BsCaretDown, BsCaretUp } from 'react-icons/bs';
import { useState } from 'react';

export default function SubMenu({name, children}) {
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.container} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} >
            <div className={styles.containerTitle}>
                {open ? <BsCaretDown/> : <BsCaretUp/>}
                <div>{name}</div>
            </div>
            <div className={clsx(styles.containerList, {[styles.visible]: open})}>{children}</div>
        </div>
    );
}