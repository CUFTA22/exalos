import Default from '@layout/Default/Default';
import Page from '@template/Index/Index';
import PageHeaders from '@utils/resources/PageHead';

const Home = () => {
  return (
    <Default>
      <PageHeaders />
      <Page />
    </Default>
  );
};

export default Home;
