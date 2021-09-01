import type { NextApiRequest, NextApiResponse } from 'next';
import * as ctrl from './week.controller';
import apiHandler from '@server/helpers/apiHandler';
import { patchSchema } from './week.schema';

export default (req: NextApiRequest, res: NextApiResponse) =>
  apiHandler({
    DELETE: { handler: ctrl.handleDelete },
    PATCH: { handler: ctrl.handlePatch, schema: patchSchema },
  })(req, res);
