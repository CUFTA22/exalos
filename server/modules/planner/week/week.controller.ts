import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';
import * as svc from './week.service';

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

/**
 * Update any cell
 * @param {Planner_Cell_Updates} data
 * @returns {Promise<Planner_Data>}
 */

export const handlePatch = async (req: NextApiRequest, res: NextApiResponse) => {
  // prettier-ignore
  const { user: { email } } = await getSession({ req });
  const { id } = req.query as { id: string }; // week id

  const data = await svc.updateCells(email, id, req.body);

  res.status(200).json({ error: false, message: 'Cell updated.', data });
};
