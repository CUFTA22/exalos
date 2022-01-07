import AppLayout from '@layout/AppLayout';
import Page from '@template/Explore/Explore';
import PageHead from '@utils/resources/PageHead';
import { demoItems } from 'app/utils/resources/demosData';

const Demos = () => {
  return (
    <AppLayout>
      <PageHead title="Exalos | Demos" />

      <Page options={demoItems} title="Explore Demos" />
    </AppLayout>
  );
};

export default Demos;
