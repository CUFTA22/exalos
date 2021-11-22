import Default from '@layout/Default/Default';
import Page from '@template/Explore/Explore';
import PageHead from '@utils/resources/PageHead';
import { appItems } from '@utils/resources/sideBarData';
import Head from 'next/head';

const Apps = () => {
  return (
    <Default>
      <PageHead title="Exalos | Apps" />

      <Page options={appItems} title="Explore Apps" />
    </Default>
  );
};

export default Apps;
