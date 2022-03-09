import type { NextApiRequest, NextApiResponse } from 'next';
import * as ctrl from './planner.controller';
import apiHandler from '@server/helpers/apiHandler';

export default (req: NextApiRequest, res: NextApiResponse) =>
  apiHandler({
    POST: { handler: ctrl.handlePost },
    // PATCH: { handler: ctrl.handlePatch },
    // DELETE: { handler: ctrl.handleDelete },
  })(req, res);
