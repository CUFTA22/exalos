import Default from '@layout/Default/Default';
import Page from '@template/Games/Blackjack/Blackjack';
import PageHead from '@utils/resources/PageHead';
import { BlackjackCTXProvider } from 'app/store/blackjack/CTX';

const Blackjack = () => {
  return (
    <Default>
      <PageHead title="Exalos | Games" />

      <BlackjackCTXProvider>
        <Page />
      </BlackjackCTXProvider>
    </Default>
  );
};

export default Blackjack;
