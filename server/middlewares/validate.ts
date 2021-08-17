import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { ObjectShape, OptionalObjectSchema } from 'yup/lib/object';

const handleSchema = (
  req: NextApiRequest,
  postSchema: OptionalObjectSchema<ObjectShape>,
  putSchema?: OptionalObjectSchema<ObjectShape>
) => {
  // Additional schema for put?
  if (req.method === 'POST') return postSchema;
  if (req.method === 'PUT') return putSchema || postSchema;
};

export function validate(
  handler: NextApiHandler,
  postSchema: OptionalObjectSchema<ObjectShape>,
  putSchema?: OptionalObjectSchema<ObjectShape>
) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    if (['POST', 'PUT'].includes(req.method)) {
      try {
        const newSchema = handleSchema(req, postSchema, putSchema);

        req.body = await newSchema.validate(req.body, {
          abortEarly: false,
          stripUnknown: true,
          strict: true,
        });
      } catch (error) {
        return res.status(400).json({ error: true, message: 'Validation failed.' });
      }
    }

    await handler(req, res);
  };
}
