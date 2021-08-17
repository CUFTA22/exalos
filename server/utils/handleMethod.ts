import type { NextApiRequest, NextApiResponse } from 'next';

type Handler = (req: NextApiRequest, res: NextApiResponse) => Promise<any>;
interface Callbacks {
  GET: Handler;
  POST: Handler;
  PATCH: Handler;
  DELETE: Handler;
}

const handleMethod = (method: string, callbacks: Callbacks) => {
  switch (method) {
    case 'GET':
      return callbacks.GET;
    case 'POST':
      return callbacks.POST;
    case 'PATCH':
      return callbacks.PATCH;
    case 'DELETE':
      return callbacks.DELETE;
    default:
      return callbacks.GET;
  }
};

export default handleMethod;
