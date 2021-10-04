interface Fetch_Return {
  get: (endpoint: string, { ...customConfig }?: RequestInit) => Promise<any>;
  post: (endpoint: string, { ...body }?: any) => Promise<any>;
  patch: (endpoint: string, { ...body }?: any) => Promise<any>;
  delete: (endpoint: string, { ...customConfig }?: RequestInit) => Promise<any>;
}

const useFetch = (): Fetch_Return => {
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

  const handleFetch = (endpoint: string, args: RequestInit) =>
    fetch(`${process.env.NEXT_PUBLIC_URL}${endpoint}`, args).then(async (response) => {
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

    return await handleFetch(endpoint, newConfig).catch(() => {});
  };

  const _post = async (endpoint: string, { ...body }: any = {}) => {
    const newConfig: RequestInit = createConfig('POST', { body });
    return await handleFetch(endpoint, newConfig).catch(() => {});
  };

  const _patch = async (endpoint: string, { ...body }: any = {}) => {
    const newConfig: RequestInit = createConfig('PATCH', { body });
    return await handleFetch(endpoint, newConfig).catch(() => {});
  };

  const _delete = async (endpoint: string, { ...customConfig }: RequestInit = {}) => {
    const newConfig: RequestInit = createConfig('DELETE', customConfig);
    return await handleFetch(endpoint, newConfig).catch(() => {});
  };

  return { get: _get, post: _post, patch: _patch, delete: _delete };
};

export default useFetch;
