import AppLayout from '@layout/AppLayout';
import Page from '@template/Others/Swagger/Swagger';
import PageHead from '@utils/resources/PageHead';

// For some reason Next 12 breaks swagger-ui
// Wait for some future update & check again

const Docs = () => {
  return (
    <AppLayout>
      <PageHead title="Exalos | API Docs" />

      <Page />
    </AppLayout>
  );
};

export default Docs;
