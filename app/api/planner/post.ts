import usePlanner from '@module/Planner/usePlanner';
import { useSession } from 'next-auth/client';
import useMutation from '../useMutation';

const usePlannerInit = () => {
  const { setPlannerData } = usePlanner();
  const [session] = useSession();
  const email = session?.user?.email;
  const { data, isLoading, mutate: fetch } = useMutation();

  const init = async () => {
    if (!email) return;
    const res = await fetch('/api/planner', 'post', { email });

    // @ts-ignore
    setPlannerData(res.message);
  };

  return { data, isLoading, init };
};

export default usePlannerInit;
