import { ApiResponse } from '@ts/apiRes.types';
import { Planner_Data } from '@ts/planner.types';
import useFetch from '../useFetch';

const getPlanner = async (email: string): Promise<ApiResponse<Planner_Data>> => {
  const res = await useFetch().get('/api/planner/' + email);
  return res;
};

export default getPlanner;
