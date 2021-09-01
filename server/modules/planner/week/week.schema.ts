import { object, number, string } from 'yup';

export const patchSchema = object({
  cell_id: string().required().min(0).max(50),
  text: string().optional().min(0).max(50),
  type: string().optional().min(0).max(50),
  task_id: string().optional(),
  meet_url: string().optional(),
});
