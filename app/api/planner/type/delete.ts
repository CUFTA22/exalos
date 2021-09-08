import usePlanner from '@module/Planner/usePlanner';
import useMutation from '../../useMutation';

const useDeleteType = () => {
  const { setPlannerData } = usePlanner();
  const { data, isLoading, mutate: fetch } = useMutation();

  const deleteType = async (_id: string) => {
    if (!_id) return;
    const res = await fetch(`/api/planner/type/${_id}`, 'delete');

    // @ts-ignore
    setPlannerData(res.data);
  };

  return { data, isLoading, deleteType };
};

export default useDeleteType;
