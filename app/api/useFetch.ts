const useFetch = () => {
  const headers = { 'Content-Type': 'application/json' };

  const createConfig = (method: string, customConfig: RequestInit): RequestInit => ({
    method: method,
    ...customConfig,
    body: JSON.stringify(customConfig.body),
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  });

  const hendleFetch = (endpoint: string, args: RequestInit) =>
    window.fetch(`${process.env.NEXTAUTH_URL}${endpoint}`, args).then(async (response) => {
      if (response.ok) {
        return await response.json();
      } else {
        const errorMessage = await response.text();
        return Promise.reject(new Error(errorMessage));
      }
    });

  const _get = (endpoint: string, { ...customConfig }: RequestInit = {}) => {
    const newConfig: RequestInit = createConfig('GET', customConfig);
    return hendleFetch(endpoint, newConfig);
  };

  const _post = (endpoint: string, { ...body }: any = {}) => {
    const newConfig: RequestInit = createConfig('POST', { body });
    return hendleFetch(endpoint, newConfig);
  };

  const _patch = (endpoint: string, { ...body }: any = {}) => {
    const newConfig: RequestInit = createConfig('PATCH', { body });
    return hendleFetch(endpoint, newConfig);
  };

  const _delete = (endpoint: string, { ...customConfig }: RequestInit = {}) => {
    const newConfig: RequestInit = createConfig('DELETE', customConfig);
    return hendleFetch(endpoint, newConfig);
  };

  return { _get, _post, _patch, _delete };
};

export default useFetch;
