import Link from 'next/link';
import { BsLink45Deg } from 'react-icons/bs';
import styles from './quote.module.css';

export default function Quote({ author, href=null, newPage=false, children }) {

    function renderLink() {
        if (newPage) {
            return (<a href={href} target="_blank" rel="noopener noreferrer">{author}</a>);
        } else {
            return (<Link href={href}>{author}</Link>);
        }
    }

    function renderAuthorSection() {
        if (!href) {
            return (<div className={styles.author}>{author}</div>);
        } else {
            return (
                <div className={styles.author}>
                    <BsLink45Deg/>{renderLink()}
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