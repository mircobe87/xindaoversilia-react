import Link from 'next/link';
import style from './article-preview.module.css';
import {BsCalendar3, BsTag} from 'react-icons/bs';
import moment from 'moment/min/moment-with-locales';

moment.locale('it');

export default function ArticlePreview({ id, title, description, category, cover, date }) {

    function renderDate() {
        let momentDate = moment(date);
        if (momentDate.isValid()) {
            return (
                <>
                    <BsCalendar3/>&nbsp;<span className={style.date}>{momentDate.format("DD-MMM-yy")}</span>&nbsp;&nbsp;
                </>
            );
        }
    }

    return (
        <article className={style.container}>
            <img src={cover ? cover : "/images/article_cover_missing.png"} alt={cover}></img>
            <div>
                <div className={style.metainfoContainer}>
                    {renderDate()}<BsTag/>&nbsp;<span className={style.category}>{category}</span>
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
