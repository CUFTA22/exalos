import Default from '@layout/Default/Default';
import Page from '@template/Explore/Explore';
import PageHead from '@utils/resources/PageHead';
import { gameItems } from 'app/utils/resources/sideBarData';

const Games = () => {
  return (
    <Default>
      <PageHead title="Exalos | Games" />

      <Page options={gameItems} title="Explore Games" />
    </Default>
  );
};

export default Games;
