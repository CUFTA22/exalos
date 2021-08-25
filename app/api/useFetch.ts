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
    fetch(endpoint, args).then(async (response) => {
      if (response.ok) {
        try {
          return await response.json();
        } catch (error) {
          return null;
        }
      } else {
        const errorMessage = await response.text();
        return Promise.reject(new Error(errorMessage));
      }
    });

  const _get = async (endpoint: string, { ...customConfig }: RequestInit = {}) => {
    const newConfig: RequestInit = createConfig('GET', customConfig);
    return await hendleFetch(endpoint, newConfig).catch(() => {});
  };

  const _post = async (endpoint: string, { ...body }: any = {}) => {
    const newConfig: RequestInit = createConfig('POST', { body });
    return await hendleFetch(endpoint, newConfig).catch(() => {});
  };

  const _patch = async (endpoint: string, { ...body }: any = {}) => {
    const newConfig: RequestInit = createConfig('PATCH', { body });
    return await hendleFetch(endpoint, newConfig).catch(() => {});
  };

  const _delete = async (endpoint: string, { ...customConfig }: RequestInit = {}) => {
    const newConfig: RequestInit = createConfig('DELETE', customConfig);
    return await hendleFetch(endpoint, newConfig).catch(() => {});
  };

  return { get: _get, post: _post, patch: _patch, delete: _delete };
};

export default useFetch;
