import AppLayout from '@layout/AppLayout';
import Page from '@template/Music/Music';
import PageHeaders from '@utils/resources/PageHead';

const Music = () => {
  return (
    <AppLayout>
      <PageHeaders />

      <Page />
    </AppLayout>
  );
};

export default Music;
