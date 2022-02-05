import { NextApiRequest, NextApiResponse } from 'next';
import * as svc from './yt2mp3.service';

/**
 * Get planner data for user ( by email )
 * @returns {Promise}
 */

export const handleGet = async (req: NextApiRequest, res: NextApiResponse) => {
  const { url } = req.query as { url: string };

  if (!url) return res.status(400).json({ error: true, message: 'No url.', data: null });

  const data = await svc.getSong(url);

  res.status(200).json({ error: false, message: 'Song retrieved.', data });
};
