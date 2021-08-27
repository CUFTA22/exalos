import type { NextApiRequest, NextApiResponse } from 'next';
import * as ctrl from './planner.controller';
import apiHandler from '@server/helpers/apiHandler';

export default (req: NextApiRequest, res: NextApiResponse) =>
  apiHandler({
    // Issue with NextAuth and GetServerSideProps, fails auth middleware
    GET: { handler: ctrl.handleGet, auth: false },
  })(req, res);
