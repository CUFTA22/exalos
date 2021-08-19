import useFetch from '../useFetch';

const postPlanner = async (email: string) => {
  useFetch()._get('/api/planner:' + email);
};

export default postPlanner;
