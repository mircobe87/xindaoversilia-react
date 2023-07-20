import styles from './menu.module.css';

export default function Menu({children}) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}