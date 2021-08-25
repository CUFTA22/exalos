import dbConnect from '@server/config/dbConnect';
import authMiddleware from '@server/middlewares/authMiddleware';
import { validate } from '@server/middlewares/validate';
import { NextApiRequest, NextApiResponse } from 'next';
import { ObjectShape, OptionalObjectSchema } from 'yup/lib/object';
import errorHandler from './errorHandler';

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

const apiHandler = (handler: HandlerObject) => {
  return async (
    req: NextApiRequest,
    res: NextApiResponse,
    schema?: OptionalObjectSchema<ObjectShape>
  ) => {
    // check handler supports HTTP method
    if (!handler[req.method]) return res.status(405).end(`Method ${req.method} Not Allowed`);

    try {
      // global middleware
      await authMiddleware(req);
      await dbConnect();

      // route handler
      console.log(`${req.method} | ${req.url}`);

      if (schema) return validate(await handler[req.method].handler(req, res), schema);
      await handler[req.method].handler(req, res);
    } catch (err) {
      // global error handler
      errorHandler(err, res);
    }
  };
};

export default apiHandler;
