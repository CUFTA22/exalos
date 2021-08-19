import type { NextApiRequest, NextApiResponse } from 'next';
import authGuard from '@server/middlewares/authGuard';
import * as ctrl from './week.controller';
import dbConnect from '@server/config/dbConnect';
import useRouter from '@server/helpers/handleRouter';

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await authGuard(req, res);
  await dbConnect();

  const router = useRouter(req, res);

  router._delete(ctrl.handleDelete); // Delete week
};

export default handler;
