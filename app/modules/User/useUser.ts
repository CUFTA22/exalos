import { useSession } from 'next-auth/client';

const useUser = () => {
  const [session, loading] = useSession();

  return {
    email: session?.user?.email,
    image: session?.user?.image,
    name: session?.user?.name,
    isLoading: loading,
  };
};

export default useUser;
