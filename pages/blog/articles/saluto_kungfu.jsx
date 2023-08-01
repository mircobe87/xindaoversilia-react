import fs from 'fs';
import path from 'path';

const metadata = "saluto_kungfu.json";
const articlesDirectory = path.join(process.cwd(), 'pages', 'blog', 'articles');

export default function ({title, description}) {
    return (
        <>
            <div>{title}</div>
            <div>{description}</div>
        </>
    );
}

export async function getStaticProps() {
    let articleMetadataFilePath = path.join(articlesDirectory, metadata);
    let metadataFile = fs.readFileSync(articleMetadataFilePath);
    return {
        props: {
            id: metadata.replace(/\.json$/, ''),
            ...JSON.parse(metadataFile)
        }
    };
}