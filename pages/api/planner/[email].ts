// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import requestHandler from '@server/modules/planner/[email]';
import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => requestHandler(req, res);
