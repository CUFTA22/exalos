import { useSession } from 'next-auth/client';
import { mutate } from 'swr';
import useMutation from '../useMutation';

const usePlannerInit = () => {
  const [session] = useSession();
  const email = session?.user?.email;
  const { data, isLoading, mutate: fetch } = useMutation();

  const init = async () => {
    if (!email) return;
    await fetch('/api/planner', 'post', { email });

    // Invalidate cache
    mutate(`/api/planner/${email}`);
  };

  return { data, isLoading, init };
};

export default usePlannerInit;
