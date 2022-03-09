import usePlanner from '@module/Apps/Planner/usePlanner';
import { Planner_Type } from '@ts/planner.types';
import useMutation from '../../useMutation';

const usePatchType = () => {
  const { setPlannerData } = usePlanner();
  const { data, isLoading, mutate } = useMutation();

  const patchType = async (_id: string, type: Planner_Type) => {
    const res = await mutate(`/api/planner/type/${_id}`, 'patch', { ...type });

    // @ts-ignore
    setPlannerData(res.data);
  };

  return { data, isLoading, patchType };
};

export default usePatchType;
