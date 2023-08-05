import styles from './article-metadata.module.css';

import {BsCalendar3, BsTag} from 'react-icons/bs';
import moment from 'moment/min/moment-with-locales';

moment.locale('it');

export default function ArticleMetadata({ date, category }) {

    function renderDate() {
        let momentDate = moment(date);
        if (momentDate.isValid()) {
            return (
                <>
                    <BsCalendar3/>&nbsp;<span className={styles.date}>{momentDate.format("DD-MMM-yy")}</span>&nbsp;&nbsp;
                </>
            );
        }
    }

    return (
        <div className={styles.metadataContainer}>
            {renderDate()}<BsTag/>&nbsp;<span className={styles.category}>{category}</span>
        </div>
    );

}