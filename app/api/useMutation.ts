import useNotification from '@module/Notifications/useNotification';
import { useState } from 'react';
import useFetch from './useFetch';

type Methods = 'post' | 'patch' | 'delete';

const useMutation = () => {
  const client = useFetch();
  const { notify } = useNotification();

  const [state, setState] = useState({
    data: undefined,
    loading: false,
  });

  const mutate = async (key: string, method: Methods, data?: any) => {
    setState({ ...state, loading: true });
    let res: any;

    if (method === 'delete')
      res = await client[method](key).catch((err) =>
        notify({ type: 'error', message: err.message })
      );
    else
      res = await client[method](key, data).catch((err) =>
        notify({ type: 'error', message: err.message })
      );

    setState({ data: res, loading: false });
    return res;
  };

  return { data: state.data, mutate, isLoading: state.loading };
};

export default useMutation;
