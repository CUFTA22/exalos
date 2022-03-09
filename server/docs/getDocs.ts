import serverList from './servers.json';
import tagsList from './tags.json';
import schemasList from './schemas.json';

import plannerDocs from './planner.json';
import yt2mp3Docs from './yt2mp3.json';

const getDocs = () => ({
  openapi: '3.0.3',
  info: {
    version: '1.0.0',
    title: 'Exalos API',
    description: 'API documentation for Exalos',
  },
  servers: serverList,
  tags: tagsList,
  paths: {
    ...plannerDocs,
    ...yt2mp3Docs,
  },

  components: {
    schemas: {
      ...schemasList,
    },
  },
});

export default getDocs;
