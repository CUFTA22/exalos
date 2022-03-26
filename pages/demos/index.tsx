import AppLayout from '@layout/AppLayout';
import Page from '@template/Explore/Explore';
import PageHead from '@utils/resources/PageHead';
import { demoItems } from 'app/utils/resources/demosData';

import webglSupport from '@utils/functions/webglSupport';

const Demos = () => {
  // Detect if browser supports webgl
  const isWebGL = webglSupport();

  return (
    <AppLayout>
      <PageHead title="Exalos | Demos" />

      {isWebGL ? <Page options={demoItems} title="Explore Demos" /> : 'WebGL not supported'}
    </AppLayout>
  );
};

export default Demos;
