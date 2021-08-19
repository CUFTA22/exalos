import type { NextApiRequest, NextApiResponse } from 'next';
import authGuard from '@server/middlewares/authGuard';
import { postSchema } from './planner.schema';
import * as ctrl from './planner.controller';
import dbConnect from '@server/config/dbConnect';
import useRouter from '@server/helpers/handleRouter';

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await authGuard(req, res);
  await dbConnect();

  const router = useRouter(req, res);

  router._post(ctrl.handlePost, postSchema);
  router._patch(ctrl.handlePatch, postSchema);
  router._delete(ctrl.handleDelete);
};

export default handler;
