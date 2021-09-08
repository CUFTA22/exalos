import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';
import * as svc from './type.service';

/**
 * Create new type
 * @param {Planner_Type} data
 * @returns {Promise}
 */

export const handlePost = async (req: NextApiRequest, res: NextApiResponse) => {
  // prettier-ignore
  const { user: { email } } = await getSession({ req });
  const data = await svc.createType(email, req.body);

  res.status(200).json({ error: false, message: 'Type created.', data });
};

/**
 * Update type
 * @param {string} id
 * @returns {Promise}
 */

export const handlePatch = async (req: NextApiRequest, res: NextApiResponse) => {
  // prettier-ignore
  const { user: { email } } = await getSession({ req });
  const { id } = req.query as { id: string }; // type id

  const data = await svc.updateType(email, id, req.body);

  res.status(200).json({ error: false, message: 'Type updated.', data });
};

/**
 * Delete any type
 * @param {string} id
 * @returns {Promise}
 */

export const handleDelete = async (req: NextApiRequest, res: NextApiResponse) => {
  // prettier-ignore
  const { user: { email } } = await getSession({ req });
  const { id } = req.query as { id: string };

  const data = await svc.deleteType(email, id);

  res.status(200).json({ error: false, message: 'Type deleted.', data });
};
