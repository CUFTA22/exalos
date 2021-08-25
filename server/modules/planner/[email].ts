import type { NextApiRequest, NextApiResponse } from 'next';
import * as ctrl from './planner.controller';
import apiHandler from '@server/helpers/apiHandler';

export default (req: NextApiRequest, res: NextApiResponse) =>
  apiHandler({
    GET: { handler: ctrl.handleGet },
  })(req, res);
