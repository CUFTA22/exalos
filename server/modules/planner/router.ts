import type { NextApiRequest, NextApiResponse } from 'next';
import authGuard from '@server/middlewares/authGuard';
import { validate } from '@server/middlewares/validate';
import handleMethod from '@server/utils/handleMethod';
import { postSchema } from './planner.schema';
import * as controller from './planner.controller';

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await authGuard(req, res);
  const { method } = req;

  handleMethod(method, {
    GET: controller.handleGet, // Retrieve all data
    POST: controller.handlePost, // Create new data ( type? )
    PATCH: controller.handlePatch, // Update cell with any data
    DELETE: controller.handleDelete, // Delete something ( ? )
  });
};

export default validate(handler, postSchema);
