import Default from '@layout/Default/Default';
import Page from '@template/Explore/Explore';
import PageHeaders from '@utils/resources/PageHeaders';
import { appItems } from '@utils/resources/sideBarData';

const Apps = () => {
  return (
    <Default>
      <PageHeaders title="Exalos | Apps" />

      <Page options={appItems} title="Explore Apps" />
    </Default>
  );
};

export default Apps;
