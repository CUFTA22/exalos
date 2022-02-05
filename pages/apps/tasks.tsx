import AppLayout from '@layout/AppLayout';
import Page from '@template/Apps/Tasks/Tasks';
import handleRedirect from 'app/utils/resources/handleRedirect';
import PageHead from '@utils/resources/PageHead';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) return handleRedirect('/');

  // const plannerData = await getTasks(session.user.email);
  return { props: { test: '' } };
};

const Tasks = () => {
  return (
    <AppLayout>
      <PageHead title="Exalos | Apps" />

      <Page />
    </AppLayout>
  );
};

export default Tasks;
