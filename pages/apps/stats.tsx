import AppLayout from '@layout/AppLayout';
import Page from '@template/Apps/Stats/Stats';
import PageHead from '@utils/resources/PageHead';
import { GetServerSideProps } from 'next';

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   // context.query -> params
//   // api -> getHomePageData()
//   return {
//     props: {},
//   };
// };

const Home = () => {
  return (
    <AppLayout>
      <PageHead title="Exalos | Apps" />

      <Page />
    </AppLayout>
  );
};

export default Home;
