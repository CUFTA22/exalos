import Default from '@layout/Default/Default';
import Page from '@template/Explore/Explore';
import PageHeaders from '@utils/resources/PageHeaders';
import { gameItems } from 'app/utils/resources/sideBarData';

const Games = () => {
  return (
    <Default>
      <PageHeaders title="Exalos | Games" />

      <Page options={gameItems} title="Explore Games" />
    </Default>
  );
};

export default Games;
