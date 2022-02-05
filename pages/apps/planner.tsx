import AppLayout from '@layout/AppLayout';
import Page from '@template/Apps/Planner/Planner';
import getPlanner from 'app/api/planner/get';
import { PlannerCTXProvider } from 'app/store/planner/CTX';
import handleRedirect from 'app/utils/resources/handleRedirect';
import PageHead from '@utils/resources/PageHead';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) return handleRedirect('/');

  const plannerData = await getPlanner(session.user.email);

  return { props: { planner: plannerData?.data || null } };
};

const Planner = (ssProps) => {
  return (
    <AppLayout>
      <PageHead title="Exalos | Apps" />

      <PlannerCTXProvider>
        <Page ssProps={ssProps} />
      </PlannerCTXProvider>
    </AppLayout>
  );
};

export default Planner;
