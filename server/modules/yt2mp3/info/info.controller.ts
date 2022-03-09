import { NextApiRequest, NextApiResponse } from 'next';
import * as svc from './info.service';

/**
 * Get planner data for user ( by email )
 * @returns {Promise}
 */

export const handleGet = async (req: NextApiRequest, res: NextApiResponse) => {
  const { url } = req.query as { url: string };

  if (!url) return res.status(400).json({ error: true, message: 'No url.', data: null });

  const data = await svc.getSongInfo(url);

  res.status(200).json({ error: false, message: 'Info retrieved.', data });
};
