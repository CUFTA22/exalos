import { NextApiRequest } from 'next';
import { getSession } from 'next-auth/client';

const authMiddleware = async (req: NextApiRequest) => {
  const session = await getSession({ req });
  if (!session) throw new Error('UnauthorizedError');
};

export default authMiddleware;
