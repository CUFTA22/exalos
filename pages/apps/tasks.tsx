import Default from '@layout/Default/Default';
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
    <Default>
      <PageHead title="Exalos | Apps" />

      <Page />
    </Default>
  );
};

export default Tasks;
