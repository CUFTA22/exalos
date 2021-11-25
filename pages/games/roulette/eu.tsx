import Default from '@layout/Default/Default';
import Page from '@template/Games/Roulette/Roulette';
import PageHead from '@utils/resources/PageHead';
import { RouletteCTXProvider } from 'app/store/roulette/CTX';

const Roulette = () => {
  return (
    <Default>
      <PageHead title="Exalos | Games" />

      <RouletteCTXProvider>
        <Page type="eu" />
      </RouletteCTXProvider>
    </Default>
  );
};

export default Roulette;
