import Default from '@layout/Default/Default';
import Page from '@template/Index/Index';
import { GetServerSideProps } from 'next';
import PageHeaders from '@utils/resources/PageHeaders';

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
      <PageHeaders />
      <Page />
    </Default>
  );
};

export default Home;
