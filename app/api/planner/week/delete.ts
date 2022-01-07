import usePlanner from '@module/Apps/Planner/usePlanner';
import useMutation from '../../useMutation';

const useDeleteWeek = () => {
  const { setPlannerData, setSelectedWeek } = usePlanner();
  const { data, isLoading, mutate } = useMutation();

  const deleteWeek = async (_id: string) => {
    const res = await mutate(`/api/planner/week/${_id}`, 'delete');

    setSelectedWeek(res.data.calendar[0].week_id);
    setPlannerData(res.data);
  };

  return { data, isLoading, deleteWeek };
};

export default useDeleteWeek;
