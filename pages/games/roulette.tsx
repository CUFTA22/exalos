import Default from '@layout/Default/Default';
import Page from '@template/Games/Roulette/Roulette';
import PageHeaders from 'app/utils/resources/PageHeaders';
import { GetServerSideProps } from 'next';

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   // context.query -> params
//   // api -> getHomePageData()
//   return {
//     props: {},
//   };
// };

const Roulette = () => {
  return (
    <Default>
      <PageHeaders title="Exalos | Games" />

      <Page />
    </Default>
  );
};

export default Roulette;
