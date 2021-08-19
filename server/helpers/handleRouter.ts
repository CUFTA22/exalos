import { validate } from '@server/middlewares/validate';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { ObjectShape, OptionalObjectSchema } from 'yup/lib/object';

const useRouter = (req: NextApiRequest, res: NextApiResponse) => {
  const _get = async (handler: NextApiHandler) => {
    if (req.method !== 'GET') return;

    await handler(req, res);
  };
  const _post = async (handler: NextApiHandler, schema?: OptionalObjectSchema<ObjectShape>) => {
    if (req.method !== 'POST') return;
    if (schema) return validate(handler, schema);

    await handler(req, res);
  };
  const _patch = async (handler: NextApiHandler, schema?: OptionalObjectSchema<ObjectShape>) => {
    if (req.method !== 'PATCH') return;
    if (schema) return validate(handler, schema);

    await handler(req, res);
  };
  const _delete = async (handler: NextApiHandler) => {
    if (req.method !== 'DELETE') return;

    await handler(req, res);
  };

  return { _get, _post, _patch, _delete };
};

export default useRouter;
