import type { NextApiRequest, NextApiResponse } from 'next';
import authGuard from '@server/middlewares/authGuard';
import handleMethod from '@server/utils/handleMethod';
import * as controller from './statistics.controller';
import dbConnect from '@server/config/dbConnect';
import { HandleNotFound } from '@server/utils/errorHandling';

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await authGuard(req, res);
  await dbConnect();

  handleMethod(req.method, {
    GET: controller.handleGet, // Retrieve all data
    POST: HandleNotFound(res), // Create new data ( type? )
    PATCH: HandleNotFound(res), // Update cell with any data
    DELETE: HandleNotFound(res), // Delete something ( ? )
  });
};

export default handler;
