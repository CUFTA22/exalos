import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import openApiSpec from '@server/openApi.json';
import Default from '@layout/Default/Default';

const Docs = () => (
  <Default>
    <div
      style={{
        backgroundColor: 'white',
        height: '100%',
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        overflowY: 'scroll',
      }}
    >
      <SwaggerUI spec={openApiSpec} />
    </div>
  </Default>
);

export default Docs;
