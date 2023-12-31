import styles from "./blog-index.module.css";

import fs from 'fs';
import path from 'path';

import Layout from "../../components/layout/Layout";
import BoilerPlate from "../../components/layout/BoilerPlate";
import Link from "next/link";
import ArticlePreview from "../../components/ArticlePreview";
import { useState } from "react";
import CategoryAndTextInput from "../../components/CategoryAndTextInput";

const title = "Kung Fu Blog";
const description = "Kung Fu blog, la nostra idea sulle arti marziali";

const articlesDirectory = path.join(process.cwd(), 'pages', 'blog', 'articles');

function getAvailalbeArticles(articlesDirectory) {
    const fileNames = fs.readdirSync(articlesDirectory);
    return fileNames
        .filter(fileName => fileName.endsWith(".jsx"))
        .map(fileName => fileName.replace(/\.jsx$/, ''));
}

function getArticleMetadata(articlesDirectory, availalbeArticles) {
    let metadata = [];
    availalbeArticles.forEach(articleName => {
        let articleMetadataFilePath = path.join(articlesDirectory, articleName+".json");
        try {
            let articleMetadataFile = fs.readFileSync(articleMetadataFilePath);
            let articleMetadata = JSON.parse(articleMetadataFile);
            console.log(articleMetadata);
            metadata.push({
                id: articleName,
                ...articleMetadata
            });
        } catch (err) {
            console.warn("No metadata found for article '%s.jsx'. This article will not imported.", articleName);
        }
    });
    return metadata;
}

export default function({articles}) {

    const [titleFilter, setTitleFilter] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("");

    function articleChooser(article) {
        return (
                titleFilter.length == 0 || article.title.toLowerCase().includes(titleFilter.toLowerCase())
            ) && (
                categoryFilter.length == 0 || article.category.toLowerCase() == categoryFilter.toLowerCase()
            );
    }

    function articleComparator(article0, article1) {
        if (article0.date < article1.date) return -1;
        if (article0.date > article1.date) return  1;
        return 0;
    }

    return (
        <Layout title={title} description={description}>
            <BoilerPlate className={styles.headerBoilerPlate}>
                <div className={styles.pageHeader}>
                    <h1>Kung Fu blog, la <strong>nostra idea sulle arti marziali</strong></h1>
                    <p>
                        Il nostro <strong><Link href="/blog/blog-index">Kung Fu</Link></strong> Blog nasce dall’idea di condividere insieme
                        a tutti i praticanti e gli appassionati di arti marziali cinesi, uno spazio in cui raccontarvi esperienze, storie di
                        stili, biografie di maestri del passato, notizie legate alla cultura cinese e tanto altro ancora.
                    </p>
                </div>
            </BoilerPlate>
            <BoilerPlate>
                <CategoryAndTextInput
                    placeholder="cerca per titolo"
                    categories={
                        Object.keys(articles.reduce((aggr, item) => {
                            aggr[item.category] = true;
                            return aggr;
                        }, {}))
                    }
                    onCategoryChange={setCategoryFilter}
                    onTextChange={setTitleFilter}
                />
                <div className={styles.previewContainer}>
                    {
                        articles
                            .filter(articleChooser)
                            .sort(articleComparator)
                            .reverse()
                            .map(article => <ArticlePreview key={article.id} {...article}></ArticlePreview>)
                    }
                </div>
            </BoilerPlate>
        </Layout>
    );
}

export async function getStaticProps() {
    const articles = getAvailalbeArticles(articlesDirectory);
    const articlesMetadata = getArticleMetadata(articlesDirectory, articles);
    return {
        props: {
            articles: articlesMetadata
        }
    };
}