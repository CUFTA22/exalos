import type { NextApiRequest, NextApiResponse } from 'next';
import * as ctrl from './type.controller';
import apiHandler from '@server/helpers/apiHandler';
import { postSchema } from './type.schema';

export default (req: NextApiRequest, res: NextApiResponse) =>
  apiHandler({
    PATCH: { handler: ctrl.handlePatch },
    DELETE: { handler: ctrl.handleDelete },
  })(req, res);
