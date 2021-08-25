import type { NextApiRequest, NextApiResponse } from 'next';
import * as ctrl from './tasks.controller';
import apiHandler from '@server/helpers/apiHandler';
import { postSchema } from './tasks.schema';

export default (req: NextApiRequest, res: NextApiResponse) =>
  apiHandler({
    GET: { handler: ctrl.handleGet },
    POST: { handler: ctrl.handleGet, schema: postSchema },
    PATCH: { handler: ctrl.handlePatch, schema: postSchema },
    DELETE: { handler: ctrl.handleGet },
  })(req, res);
