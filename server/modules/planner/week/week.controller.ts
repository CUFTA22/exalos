import { NextApiRequest, NextApiResponse } from 'next';

/**
 * Creates a new week
 * @returns {Promise}
 */

export const handlePost = async (req: NextApiRequest, res: NextApiResponse) => {
  // ...
};

/**
 * Deletes a week by it's id
 * @param {string} id // week_id in DB
 * @returns {Promise}
 */

export const handleDelete = async (req: NextApiRequest, res: NextApiResponse) => {
  // ...
};
