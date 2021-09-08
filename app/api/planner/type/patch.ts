import usePlanner from '@module/Planner/usePlanner';
import { Planner_Type } from '@ts/planner.types';
import useMutation from '../../useMutation';

const useDeleteType = () => {
  const { setPlannerData } = usePlanner();
  const { data, isLoading, mutate } = useMutation();

  const deleteType = async (_id: string, type: Planner_Type) => {
    const res = await mutate(`/api/planner/type/${_id}`, 'patch', { ...type });

    // @ts-ignore
    setPlannerData(res.data);
  };

  return { data, isLoading, deleteType };
};

export default useDeleteType;
