import Layout from "../../components/layout/Layout";
import BoilerPlate from "../../components/layout/BoilerPlate";

const title = "Kung Fu Blog";
const description = "Kung Fu blog, la nostra idea sulle arti marziali";

export default function() {
    return (
        <Layout title={title} description={description}>
            <BoilerPlate>

            </BoilerPlate>
        </Layout>
    );
}