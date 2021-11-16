import Default from '@layout/Default/Default';
import Page from '@template/Apps/Tasks/Tasks';
import handleRedirect from 'app/utils/resources/handleRedirect';
import PageHeaders from '@utils/resources/PageHeaders';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) return handleRedirect('/');

  // const plannerData = await getTasks(session.user.email);
  return { props: { test: '' } };
};

const Tasks = () => {
  return (
    <Default>
      <PageHeaders title="Exalos | Apps" />

      <Page />
    </Default>
  );
};

export default Tasks;
