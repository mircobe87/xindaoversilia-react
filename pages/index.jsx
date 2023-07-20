import Layout from '../components/layout/Layout';
import BoilerPlate from '../components/layout/BoilerPlate';

export const title = "Kung Fu XinDao Versilia";
export const description = "Scuola di Kung Fu tradizionale in Versilia";

export default function Home() {
  return (
    <Layout title={title} description={description}>
      <BoilerPlate>
        <h1>{title}</h1>
      </BoilerPlate>
    </Layout>
  );
}
