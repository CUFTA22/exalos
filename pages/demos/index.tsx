import Default from '@layout/Default/Default';
import Page from '@template/Explore/Explore';
import PageHead from '@utils/resources/PageHead';
import { demoItems } from 'app/utils/resources/sideBarData';

const Demos = () => {
  return (
    <Default>
      <PageHead title="Exalos | Demos" />
      <Page options={demoItems} title="Explore Demos" />
    </Default>
  );
};

export default Demos;
