import { HandleUnauthorized } from '@server/utils/errorHandling';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';

const authGuard = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  if (!session) HandleUnauthorized(res);
};

export default authGuard;
