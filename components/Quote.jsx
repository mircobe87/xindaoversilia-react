import Link from 'next/link';
import { BsLink45Deg } from 'react-icons/bs';
import styles from './quote.module.css';

export default function Quote({ author, href=null, children }) {

    function renderAuthorSection() {
        if (!href) {
            return (<div className={styles.author}>{author}</div>);
        } else {
            return (
                <div className={styles.author}>
                    <BsLink45Deg/><Link href={href}>{author}</Link>
                </div>
            );
        }
    }

    return (
        <blockquote className={styles.container} cite={author}>
            <div className={styles.content}>
                {children}
            </div>
            {renderAuthorSection()}
        </blockquote>
    );
}