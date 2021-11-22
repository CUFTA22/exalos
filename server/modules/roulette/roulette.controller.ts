import { randomNumber } from '@server/utils/functions';
import { NextApiRequest, NextApiResponse } from 'next';

/**
 * Get random color as winner
 * @returns {Promise}
 */

export const handlePost = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = randomNumber(0, 36);

  res.status(200).json({ error: false, message: 'Winner recieved.', data });
};
