import { Planner_Data } from '@ts/planner.types';
import { useSession } from 'next-auth/client';
import useSWR from 'swr';
import fetcher from '../fetcher';
import useFetch from '../useFetch';

export const useGetPlannerData = (initialData: Planner_Data) => {
  const [session] = useSession();
  // prettire-ignore
  const { data } = useSWR<Planner_Data>(`/api/planner/${session.user.email}`, fetcher, {
    initialData,
  });

  return data;
};

const getPlanner = async (email: string) => {
  useFetch()._get('/api/planner:' + email);
};

export default getPlanner;
