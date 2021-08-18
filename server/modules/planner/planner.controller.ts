import { NextApiRequest, NextApiResponse } from 'next';
import * as svc from './planner.service';

export const handleGet = async (req: NextApiRequest, res: NextApiResponse) => {
  // ...
};

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
