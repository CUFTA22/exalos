// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import requestHandler from '@server/modules/yt2mp3';
import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => requestHandler(req, res);
