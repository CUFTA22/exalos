import Default from '@layout/Default/Default';
import Page from '@template/Apps/Planner/Planner';
import getPlanner from 'app/api/planner/get';
import { PlannerCTXProvider } from 'app/store/planner/CTX';
import handleRedirect from 'app/utils/resources/handleRedirect';
import PageHeaders from 'app/utils/resources/PageHeaders';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) return handleRedirect('/');

  const plannerData = await getPlanner(session.user.email);

  return { props: { planner: plannerData?.data || null } };
};

const Planner = (ssProps) => {
  return (
    <Default>
      <PageHeaders title="Exalos | Apps" />

      <PlannerCTXProvider>
        <Page ssProps={ssProps} />
      </PlannerCTXProvider>
    </Default>
  );
};

export default Planner;
