import { randomNumber, cryptoRandomNumber } from '@server/utils/functions';
import { rouletteEuNumbers, rouletteUsNumbers } from '@utils/resources/rouletteNumbers';
import { NextApiRequest, NextApiResponse } from 'next';

/**
 * Get random color as winner
 * @returns {Promise}
 */

export const handlePost = async (req: NextApiRequest, res: NextApiResponse) => {
  const { type } = req.body as { type: 'eu' | 'us' };

  const length = type === 'eu' ? rouletteEuNumbers.length : rouletteUsNumbers.length;

  const cryptoIdx = cryptoRandomNumber(0, length);
  // const randomIdx = randomNumber(0, length);

  const winner = type === 'eu' ? rouletteEuNumbers[cryptoIdx].n : rouletteUsNumbers[cryptoIdx].n;

  res.status(200).json({ error: false, message: 'Winner recieved.', data: parseInt(winner) });
};
