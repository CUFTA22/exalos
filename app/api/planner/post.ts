import useFetch from '../useFetch';

const postPlanner = async (email: string) => {
  useFetch()._post('/api/planner', { email });
};

export default postPlanner;
