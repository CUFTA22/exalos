import { array, number, object, string, TypeOf } from 'yup';

export const postSchema = object({
  email: string().required().email().min(2).max(100),
});

export type Post = TypeOf<typeof postSchema>;
