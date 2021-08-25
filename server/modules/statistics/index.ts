import type { NextApiRequest, NextApiResponse } from 'next';
import * as ctrl from './statistics.controller';
import apiHandler from '@server/helpers/apiHandler';

export default (req: NextApiRequest, res: NextApiResponse) =>
  apiHandler({
    POST: { handler: ctrl.handleGet },
  })(req, res);
