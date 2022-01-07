import AppLayout from '@layout/AppLayout';
import Page from '@template/Demos/Minecraft/Minecraft';
import PageHead from '@utils/resources/PageHead';

const Chest = () => {
  return (
    <AppLayout>
      <PageHead title="Exalos | Demo Chest" />

      <Page />
    </AppLayout>
  );
};

export default Chest;
