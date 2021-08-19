import type { NextApiRequest, NextApiResponse } from 'next';
import authGuard from '@server/middlewares/authGuard';
import { validate } from '@server/middlewares/validate';
import handleMethod from '@server/helpers/handleMethod';
import { postSchema } from './tasks.schema';
import * as controller from './tasks.controller';
import dbConnect from '@server/config/dbConnect';

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await authGuard(req, res);
  await dbConnect();

  handleMethod(req.method, {
    GET: controller.handleGet, // Retrieve all data
    POST: validate(controller.handlePost, postSchema), // Create new data ( type? )
    PATCH: validate(controller.handlePatch, postSchema), // Update cell with any data
    DELETE: controller.handleDelete, // Delete something ( ? )
  });
};

export default handler;
