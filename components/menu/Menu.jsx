import styles from './menu.module.css';
import clsx from 'clsx';

import { GrMenu } from 'react-icons/gr';
import { useState } from 'react';

export default function Menu({children}) {
    const [ open, setOpen ] = useState(false);

    function toggleMenu() {
        console.log("ciao");
        setOpen(!open);
    }

    let containerClasses = clsx({
        [styles.container] : true,
        [styles.open] : open
    });

    return (
        <>
            <button className={styles.burger} onClick={toggleMenu}>
                <GrMenu></GrMenu>
            </button>
            <div className={containerClasses}>
                {children}
            </div>
        </>
    );
}