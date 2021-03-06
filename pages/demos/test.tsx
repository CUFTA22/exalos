import AppLayout from '@layout/AppLayout';
import Page from '@template/Demos/Test/Test';
import PageHead from '@utils/resources/PageHead';

const Test = () => {
  return (
    <AppLayout>
      <PageHead title="Exalos | Demo Test" />

      <Page />
    </AppLayout>
  );
};

export default Test;
