import usePlanner from '@module/Apps/Planner/usePlanner';
import { Planner_Type } from '@ts/planner.types';
import useMutation from '../../useMutation';

const useAddType = () => {
  const { setPlannerData } = usePlanner();
  const { data, isLoading, mutate } = useMutation();

  const addType = async (type: Planner_Type) => {
    if (!type.name) return;
    const res = await mutate('/api/planner/type', 'post', { ...type });

    // @ts-ignore
    setPlannerData(res.data);
  };

  return { data, isLoading, addType };
};

export default useAddType;
