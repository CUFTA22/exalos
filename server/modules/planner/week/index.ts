import type { NextApiRequest, NextApiResponse } from 'next';
import authGuard from '@server/middlewares/authGuard';
import { validate } from '@server/middlewares/validate';
import handleMethod from '@server/utils/handleMethod';
import { postSchema } from './week.schema';
import * as controller from './week.controller';
import dbConnect from '@server/config/dbConnect';
import { HandleNotFound } from '@server/utils/errorHandling';

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await authGuard(req, res);
  await dbConnect();

  handleMethod(req.method, {
    GET: HandleNotFound(res),
    POST: validate(controller.handlePost, postSchema), // Create new week
    PATCH: HandleNotFound(res),
    DELETE: controller.handleDelete, // Delete week
  });
};

export default handler;
