import AppLayout from '@layout/AppLayout';
import Page from '@template/Food/Food';
import PageHeaders from '@utils/resources/PageHead';

const Food = () => {
  return (
    <AppLayout>
      <PageHeaders />

      <Page />
    </AppLayout>
  );
};

export default Food;
