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
                    <MenuEntry name="Post 1" href="/posts/first-post"></MenuEntry>
                    <SubMenu name="Sub Menu">
                        <MenuEntry name="Sub Post 1" href="/posts/sub-post-1"></MenuEntry>
                        <MenuEntry name="Sub Post 2" href="/posts/sub-post-2"></MenuEntry>
                        <MenuEntry name="Sub Post 3" href="/posts/sub-post-3"></MenuEntry>
                    </SubMenu>
                </Menu>
            </div>
        </BoilerPlate>
    );
}