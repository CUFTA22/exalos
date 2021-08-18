import { NextApiResponse } from 'next';

export const HandleNotFound = (res: NextApiResponse) =>
  res.status(404).json({ error: true, message: 'Route not found.' });

export const HandleUnauthorized = (res: NextApiResponse) =>
  res.status(401).json({ error: true, message: 'Unauthorized!' });

export const HandleBadRequest = (res: NextApiResponse) =>
  res.status(400).json({ error: true, message: 'Validation failed.' });
