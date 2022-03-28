import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
// import openApiSpec from '@server/openApi.json';
import getDocs from '@server/docs/getDocs';

const Swagger = () => {
  const openApiSpec = getDocs();

  return (
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
  );
};

export default Swagger;
