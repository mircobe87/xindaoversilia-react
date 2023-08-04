import styles from './titlebar.module.css';

import Image from 'next/image';
import Menu from './menu/Menu';
import BoilerPlate from './layout/BoilerPlate';

export default function TitleBar() {
    return (
        <BoilerPlate className={styles.boilerplate}>
            <div className={styles.container}>
                <Image src="/images/logo-xindao.png" width={300} height={82} alt="XinDao" priority placeholder="empty"></Image>
                <Menu/>
            </div>
        </BoilerPlate>
    );
}