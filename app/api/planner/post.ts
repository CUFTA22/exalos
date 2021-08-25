import useUser from '@module/User/useUser';
import useMutation from '../useMutation';

const usePlannerInit = () => {
  const { email } = useUser();
  const { data, isLoading, mutate } = useMutation();

  const init = async () => {
    await mutate('/api/planner', 'post', { email });
  };

  return { data, isLoading, init };
};

export default usePlannerInit;
