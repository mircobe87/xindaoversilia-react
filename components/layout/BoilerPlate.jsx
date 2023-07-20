import styles from './boilerplate.module.css';
import clsx from 'clsx';

export default function BoilerPlate({children, className}) {
    return (
        <div className={clsx([styles.plate, className])}>
            <div className={styles.boiler}>
                {children}
            </div>
        </div>
    );
}