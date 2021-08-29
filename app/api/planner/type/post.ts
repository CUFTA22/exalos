import { Planner_Type } from '@ts/planner.types';
import { useSession } from 'next-auth/client';
import { mutate } from 'swr';
import useMutation from '../../useMutation';

const useAddType = () => {
  const [session] = useSession();
  const email = session?.user?.email;
  const { data, isLoading, mutate: fetch } = useMutation();

  const addType = async (type: Planner_Type) => {
    if (!type.name) return;
    await fetch('/api/planner/type', 'post', { type });

    // Invalidate cache
    mutate(`/api/planner/${email}`);
  };

  return { data, isLoading, addType };
};

export default useAddType;
