import Default from '@layout/Default/Default';
import Page from '@template/Explore/Explore';
import PageHeaders from 'app/utils/resources/PageHeaders';
import { demoItems } from 'app/utils/resources/sideBarData';

const Demos = () => {
  return (
    <Default>
      <PageHeaders title="Exalos | Demos" />
      <Page options={demoItems} title="Explore Demos" />
    </Default>
  );
};

export default Demos;
