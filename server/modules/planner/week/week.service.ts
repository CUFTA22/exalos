import { updatePlannerCells } from '@server/utils/util_Planner';
import { Planner_Cell_Updates, Planner_Type } from '@ts/planner.types';
import { getByEmail } from '../planner.service';

export const updateCells = async (email: string, id: string, data: Planner_Cell_Updates) => {
  let plannerData = await getByEmail(email);

  plannerData = updatePlannerCells(plannerData, id, data);

  return await plannerData.save();
};
