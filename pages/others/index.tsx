import AppLayout from '@layout/AppLayout';
import Page from '@template/Explore/Explore';
import PageHead from '@utils/resources/PageHead';
import { othersData } from 'app/utils/resources/othersData';

const Others = () => {
  return (
    <AppLayout>
      <PageHead title="Exalos | Others" />

      <Page options={othersData} title="Others" />
    </AppLayout>
  );
};

export default Others;
