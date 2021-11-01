import dbConnect from '@server/config/dbConnect';
import authMiddleware from '@server/middlewares/authMiddleware';
import { validate } from '@server/middlewares/validate';
import { NextApiRequest, NextApiResponse } from 'next';
import { ObjectShape, OptionalObjectSchema } from 'yup/lib/object';
import errorHandler from './errorHandler';
import sendSlackMsg from './slackHandler';

interface CustomApiHandler {
  handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void | any>;
  schema?: OptionalObjectSchema<ObjectShape>;
  auth?: boolean; // Toggle authGuard later if necessary
}

interface HandlerObject {
  GET?: CustomApiHandler;
  POST?: CustomApiHandler;
  PATCH?: CustomApiHandler;
  DELETE?: CustomApiHandler;
}

const apiHandler = (config: HandlerObject) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { handler, schema, auth = true } = config[req.method];

    // check handler supports HTTP method
    if (!config[req.method]) return res.status(405).end(`Method ${req.method} Not Allowed`);

    try {
      // global middleware
      if (auth) await authMiddleware(req);

      // Mongo connection
      await dbConnect();

      // route handler
      if (schema) return validate(handler, schema)(req, res);
      await handler(req, res);
    } catch (err) {
      // global error handler
      errorHandler(err, res);
    }
  };
};

export default apiHandler;
