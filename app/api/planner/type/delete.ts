import usePlanner from '@module/Planner/usePlanner';
import useMutation from '../../useMutation';

const useDeleteType = () => {
  const { setPlannerData } = usePlanner();
  const { data, isLoading, mutate } = useMutation();

  const deleteType = async (_id: string) => {
    const res = await mutate(`/api/planner/type/${_id}`, 'delete');

    // @ts-ignore
    setPlannerData(res.data);
  };

  return { data, isLoading, deleteType };
};

export default useDeleteType;
