import AppLayout from '@layout/AppLayout';
import Page from '@template/Games/Slots/Slots';
import PageHead from '@utils/resources/PageHead';
import { SlotsCTXProvider } from 'app/store/slots/CTX';

const Slots = () => {
  return (
    <AppLayout>
      <PageHead title="Exalos | Games" />

      <SlotsCTXProvider>
        <Page />
      </SlotsCTXProvider>
    </AppLayout>
  );
};

export default Slots;
