import { Planner_Type } from '@ts/planner.types';
import { useSession } from 'next-auth/client';
import { mutate } from 'swr';
import useMutation from '../../useMutation';

const useDeleteType = () => {
  const [session] = useSession();
  const email = session?.user?.email;
  const { data, isLoading, mutate: fetch } = useMutation();

  const deleteType = async (_id: string) => {
    if (!_id) return;
    await fetch(`/api/planner/type/${_id}`, 'delete');

    // Invalidate cache
    mutate(`/api/planner/${email}`);
  };

  return { data, isLoading, deleteType };
};

export default useDeleteType;
