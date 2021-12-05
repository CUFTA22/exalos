import AppLayout from '@layout/AppLayout';
import Page from '@template/Games/Blackjack/Blackjack';
import PageHead from '@utils/resources/PageHead';
import { BlackjackCTXProvider } from 'app/store/blackjack/CTX';

const Blackjack = () => {
  return (
    <AppLayout>
      <PageHead title="Exalos | Games" />

      <BlackjackCTXProvider>
        <Page />
      </BlackjackCTXProvider>
    </AppLayout>
  );
};

export default Blackjack;
