import AppLayout from '@layout/AppLayout';
import Page from '@template/Demos/Test/Test';
import PageHead from '@utils/resources/PageHead';

const Demos = () => {
  return (
    <AppLayout>
      <PageHead title="Exalos | Demos" />

      <Page />
    </AppLayout>
  );
};

export default Demos;
