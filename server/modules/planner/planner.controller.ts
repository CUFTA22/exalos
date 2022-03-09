import { NextApiRequest, NextApiResponse } from 'next';
import * as svc from './planner.service';

/**
 * Get planner data for user ( by email )
 * @returns {Promise}
 */

export const handleGet = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.query as { email: string };

  const data = await svc.getData(email);

  res.status(200).json({ error: false, message: 'Planner data retrieved.', data });
};

/**
 * Initialize first week, after first sign in
 * @param {string} email
 * @returns {Promise}
 */

export const handlePost = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;

  const data = await svc.initPlanner(email);

  res.status(201).json({ error: false, message: 'Planner data initialized.', data });
};

export const handlePatch = async (req: NextApiRequest, res: NextApiResponse) => {
  // ...
};

export const handleDelete = async (req: NextApiRequest, res: NextApiResponse) => {
  // ...
};
