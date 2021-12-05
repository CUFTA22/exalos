import AppLayout from '@layout/AppLayout';
import Page from '@template/Games/Roulette/Roulette';
import PageHead from '@utils/resources/PageHead';
import { RouletteCTXProvider } from 'app/store/roulette/CTX';

const Roulette = () => {
  return (
    <AppLayout>
      <PageHead title="Exalos | Games" />

      <RouletteCTXProvider>
        <Page type="eu" />
      </RouletteCTXProvider>
    </AppLayout>
  );
};

export default Roulette;
