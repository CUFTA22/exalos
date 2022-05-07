import AppLayout from '@layout/AppLayout';
import Page from '@template/ErrorCode/ErrorCode';
import PageHead from '@utils/resources/PageHead';

const ErrorCode = () => {
  return (
    <AppLayout>
      <PageHead />

      <Page code={401} />
    </AppLayout>
  );
};

export default ErrorCode;
