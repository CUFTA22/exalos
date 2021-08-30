import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';
import * as svc from './type.service';

export const handlePost = async (req: NextApiRequest, res: NextApiResponse) => {
  // prettier-ignore
  const { user: { email } } = await getSession({ req });
  const data = await svc.createType(email, req.body);

  res.status(200).json({ error: false, message: data });
};

export const handlePatch = async (req: NextApiRequest, res: NextApiResponse) => {
  // ...
};

export const handleDelete = async (req: NextApiRequest, res: NextApiResponse) => {
  // prettier-ignore
  const { user: { email } } = await getSession({ req });
  const { id } = req.query as { id: string };

  const data = await svc.deleteType(email, id);

  res.status(200).json({ error: false, message: data });
};
