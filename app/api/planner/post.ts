import usePlanner from '@module/Planner/usePlanner';
import { useSession } from 'next-auth/client';
import useMutation from '../useMutation';

const usePlannerInit = () => {
  const { initializeState } = usePlanner();
  const [session] = useSession();
  const email = session?.user?.email;
  const { data, isLoading, mutate } = useMutation();

  const init = async () => {
    if (!email) return;
    const res = await mutate('/api/planner', 'post', { email });

    initializeState(res.data);
  };

  return { data, isLoading, init };
};

export default usePlannerInit;
