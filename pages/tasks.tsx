import Default from '@layout/Default/Default';
import Page from '@template/Tasks/Tasks';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

export const getServerSideProps: GetServerSideProps = async (context) => {
  // context.query -> params
  // service -> getHomePageData()
  return {
    props: {},
  };
};

const Tasks = () => {
  return (
    <Default>
      <Head>
        <title>Exalos</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page />
    </Default>
  );
};

export default Tasks;
