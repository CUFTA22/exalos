import AppLayout from '@layout/AppLayout';
import Page from '@template/Explore/Explore';
import PageHead from '@utils/resources/PageHead';
import { gameItems } from 'app/utils/resources/gamesData';

const Games = () => {
  return (
    <AppLayout>
      <PageHead title="Exalos | Games" />

      <Page options={gameItems} title="Explore Games" />
    </AppLayout>
  );
};

export default Games;
