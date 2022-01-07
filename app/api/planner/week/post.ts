import usePlanner from '@module/Apps/Planner/usePlanner';
import { Planner_Type } from '@ts/planner.types';
import useMutation from '../../useMutation';

const useAddWeek = () => {
  const { setPlannerData } = usePlanner();
  const { data, isLoading, mutate } = useMutation();

  const addWeek = async () => {
    const res = await mutate('/api/planner/week', 'post');

    setPlannerData(res.data);
  };

  return { data, isLoading, addWeek };
};

export default useAddWeek;
