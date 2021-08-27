import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { ObjectShape, OptionalObjectSchema } from 'yup/lib/object';

export function validate(handler: NextApiHandler, schema: OptionalObjectSchema<ObjectShape>) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    if (['POST', 'PUT'].includes(req.method)) {
      try {
        req.body = await schema.validate(req.body, {
          abortEarly: false,
          stripUnknown: true,
          strict: true,
        });
      } catch (error) {
        throw new Error('BadRequest');
      }
    }

    await handler(req, res);
  };
}
