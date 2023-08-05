import Link from 'next/link';
import styles from './article-preview.module.css';
import moment from 'moment/min/moment-with-locales';
import ArticleMetadata from './ArticleMetadata';

moment.locale('it');

export default function ArticlePreview({ id, title, description, category, cover, date }) {

    return (
        <article className={styles.container}>
            <img src={cover ? cover : "/images/article_cover_missing.png"} alt={cover}></img>
            <div>
                <ArticleMetadata date={date} category={category}></ArticleMetadata>
                <div className={styles.summary}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
                <Link href={`/blog/articles/${id}`}>Scopri di più</Link>
            </div>
        </article>
    );
}
