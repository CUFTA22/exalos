import { NextApiResponse } from 'next';

const errorHandler = (err: any, res: NextApiResponse) => {
  if (typeof err === 'string') {
    // custom application error
    const is404 = err.toLowerCase().endsWith('not found');
    const statusCode = is404 ? 404 : 400;
    return res.status(statusCode).json({ message: err });
  }

  if (err?.message === 'UnauthorizedError') {
    // jwt authentication error
    return res.status(401).json({ error: true, message: 'Unauthorized' });
  }

  // default to 500 server error
  return res.status(500).json({ error: true, message: err.message });
};

export default errorHandler;
