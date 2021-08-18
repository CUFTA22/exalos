import type { NextApiRequest, NextApiResponse } from 'next';
import authGuard from '@server/middlewares/authGuard';
import { validate } from '@server/middlewares/validate';
import handleMethod from '@server/utils/handleMethod';
import { postSchema } from './planner.schema';
import * as ctrl from './planner.controller';
import dbConnect from '@server/config/dbConnect';

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await authGuard(req, res);
  await dbConnect();

  handleMethod(req.method, {
    GET: ctrl.handleGet,
    POST: validate(ctrl.handlePost, postSchema), // Create new planner data ( init )
    PATCH: validate(ctrl.handlePatch, postSchema), // Update cell, settings...
    DELETE: ctrl.handleDelete, // Delete something ( ? )
  });
};

export default handler;
