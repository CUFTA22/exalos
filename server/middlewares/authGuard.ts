import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';

const authGuard = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  if (!session) res.status(401).json({ error: true, message: 'Unauthorized!' });
  res.end();
};

export default authGuard;
