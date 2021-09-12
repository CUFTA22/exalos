import usePlanner from '@module/Planner/usePlanner';
import useMutation from '../../useMutation';

const useDeleteWeek = () => {
  const { setPlannerData } = usePlanner();
  const { data, isLoading, mutate } = useMutation();

  const deleteWeek = async (_id: string) => {
    const res = await mutate(`/api/planner/week/${_id}`, 'delete');

    setPlannerData(res.data);
  };

  return { data, isLoading, deleteWeek };
};

export default useDeleteWeek;
