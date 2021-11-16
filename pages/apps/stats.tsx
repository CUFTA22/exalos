import Default from '@layout/Default/Default';
import Page from '@template/Apps/Stats/Stats';
import PageHeaders from 'app/utils/resources/PageHeaders';
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
    <Default>
      <PageHeaders title="Exalos | Apps" />

      <Page />
    </Default>
  );
};

export default Home;
