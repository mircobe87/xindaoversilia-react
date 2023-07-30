import Link from 'next/link';
import style from './article-preview.module.css';

export default function ArticlePreview({ id, title, description, category, cover, date }) {
    return (
        <article className={style.container}>
            <img src={cover}></img>
            <div>
                <div>
                    <span>{date}</span> | <span className={style.category}>{category}</span>
                </div>
                <div className={style.summary}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
                <Link href={"/blog/articles/"+id}>Scopri di più</Link>
            </div>
        </article>
    );
}
