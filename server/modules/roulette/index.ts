import type { NextApiRequest, NextApiResponse } from 'next';
import * as ctrl from './roulette.controller';
import apiHandler from '@server/helpers/apiHandler';

export default (req: NextApiRequest, res: NextApiResponse) =>
  apiHandler({
    POST: { handler: ctrl.handlePost },
  })(req, res);
