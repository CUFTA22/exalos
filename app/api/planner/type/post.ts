import usePlanner from '@module/Planner/usePlanner';
import { Planner_Type } from '@ts/planner.types';
import useMutation from '../../useMutation';

const useAddType = () => {
  const { setPlannerData } = usePlanner();
  const { data, isLoading, mutate: fetch } = useMutation();

  const addType = async (type: Planner_Type) => {
    if (!type.name) return;
    const res = await fetch('/api/planner/type', 'post', { ...type });

    // @ts-ignore
    setPlannerData(res.message);
  };

  return { data, isLoading, addType };
};

export default useAddType;
