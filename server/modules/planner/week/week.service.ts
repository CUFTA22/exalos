import { updatePlannerCells } from '@server/utils/util_Planner';
import { Planner_Cell_Updates } from '@ts/planner.types';
import { getByEmail } from '../planner.service';

export const updateCells = async (email: string, id: string, data: Planner_Cell_Updates) => {
  let plannerData = await getByEmail(email);

  // @ts-ignore
  plannerData = updatePlannerCells(plannerData, id, data);

  return await plannerData.save();
};
