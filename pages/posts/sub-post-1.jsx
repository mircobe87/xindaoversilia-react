import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';

export default function SubPost() {
  return (
    <Layout>
        <Head>
            <title>Sub Post</title>
        </Head>
        <h1>Sub Post</h1>
        <h2>
            <Link href="/">Back to home</Link>
        </h2>
    </Layout>
  );
}