import AppLayout from '@layout/AppLayout';
import Page from '@template/Explore/Explore';
import PageHead from '@utils/resources/PageHead';
import { appItems } from '@utils/resources/appsData';
import Head from 'next/head';

const Apps = () => {
  return (
    <AppLayout>
      <PageHead title="Exalos | Apps" />

      <Page options={appItems} title="Explore Apps" />
    </AppLayout>
  );
};

export default Apps;
