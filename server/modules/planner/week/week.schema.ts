import { object, array, string } from 'yup';

export const patchSchema = object({
  cell_ids: array(string().required().min(0).max(50)),
  text: string().optional().min(0).max(50),
  type_id: string().optional().min(0).max(50),
  task_id: string().optional(),
  meet_url: string().optional(),
});
