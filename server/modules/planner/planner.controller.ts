import { NextApiRequest, NextApiResponse } from 'next';
import * as svc from './planner.service';

/**
 * Get planner data for user ( by email )
 * @returns {Promise}
 */

export const handleGet = async (req: NextApiRequest, res: NextApiResponse) => {
  // ...
};

/**
 * Initialize first week, after first sign in
 * @param {string} email
 * @returns {Promise}
 */

export const handlePost = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;
  const data = await svc.initPlanner(email);

  res.send(data);
};

export const handlePatch = async (req: NextApiRequest, res: NextApiResponse) => {
  // ...
};

export const handleDelete = async (req: NextApiRequest, res: NextApiResponse) => {
  // ...
};
