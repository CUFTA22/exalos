import { ApiResponse } from '@ts/apiRes.types';
import { Planner_Data } from '@ts/planner.types';
import { useSession } from 'next-auth/client';
import useSWR from 'swr';
import fetcher from '../fetcher';
import useFetch from '../useFetch';

export const usePlannerData = (initialData?: Planner_Data) => {
  const [session] = useSession();
  const email = session?.user?.email;

  const { data, error } = useSWR<ApiResponse<Planner_Data>>(
    session ? `/api/planner/${email}` : null,
    fetcher,
    {
      initialData: { error: false, message: initialData },
    }
  );

  return {
    data: data.message,
    isLoading: !error && !data,
    isError: error,
  };
};

const getPlanner = async (email: string): Promise<ApiResponse<Planner_Data>> => {
  const res = await useFetch().get('/api/planner/' + email);
  return res;
};

export default getPlanner;
