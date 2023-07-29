import styles from './menu.module.css';
import clsx from 'clsx';
import React from 'react';

import { GrMenu } from 'react-icons/gr';
import { useState } from 'react';

export default function Menu({children}) {
    const [ open, setOpen ] = useState(false);
    const [ openSubmenuIndex, setOpenSubmenuIndex ] = useState(-1);

    let containerClasses = clsx({
        [styles.container] : true,
        [styles.open] : open
    });

    function toggleMenu() {
        setOpen(!open);
    }

    function onSubMenuClick(subMenuIndex) {
        setOpenSubmenuIndex(openSubmenuIndex == subMenuIndex ? -1 : subMenuIndex);
    }

    return (
        <>
            <button className={styles.burger} onClick={toggleMenu}>
                <GrMenu></GrMenu>
            </button>
            <div className={containerClasses}>
                {
                    React.Children.map(children, (child, index) => {
                        if (child.type.name == 'SubMenu') {
                            return React.cloneElement(child, {
                                ...child.props,
                                isOpen: openSubmenuIndex == index,
                                onClick: () => onSubMenuClick(index)
                            });
                        } else {
                            return child;
                        }
                    })
                }
            </div>
        </>
    );
}