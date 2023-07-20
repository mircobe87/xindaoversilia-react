import styles from './menuentry.module.css';
import {clsx} from 'clsx';
import {useRouter} from 'next/router';
import Link from 'next/link';

export default function MenuEntry( {name, href}) {
    const router = useRouter();
    let containerClasses = clsx(styles.container, {
        [styles.selected]: router.pathname == href
    });
    return (
        <div className={containerClasses}>
            <Link href={href}>{name}</Link>
        </div>
    );
}