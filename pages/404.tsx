import AppLayout from '@layout/AppLayout';
import Page from '@template/ErrorCode/ErrorCode';
import PageHead from '@utils/resources/PageHead';

const Planner = () => {
  return (
    <AppLayout>
      <PageHead />

      <Page code={404} />
    </AppLayout>
  );
};

export default Planner;
