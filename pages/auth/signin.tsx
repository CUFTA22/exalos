import AppLayout from '@layout/AppLayout';
import Page from '@template/SignIn/SignIn';
import PageHead from '@utils/resources/PageHead';
import { GetServerSideProps } from 'next';
import { getProviders, getSession } from 'next-auth/react';
import handleRedirect from '../../app/utils/resources/handleRedirect';

// This is the recommended way for Next.js 9.3 or newer
export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders();
  const session = await getSession(context);

  if (session) return handleRedirect('/');

  return {
    props: { providers },
  };
};

const SignIn = (ssProps) => {
  return (
    <AppLayout>
      <PageHead title="Exalos | Sign In" />

      <Page ssProps={ssProps} />
    </AppLayout>
  );
};

export default SignIn;
