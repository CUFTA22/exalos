import AppLayout from '@layout/AppLayout';
import Page from '@template/Index/Index';
import PageHeaders from '@utils/resources/PageHead';

const Home = () => {
  return (
    <AppLayout>
      <PageHeaders />
      
      <Page />
    </AppLayout>
  );
};

export default Home;
