import { updatePlannerCell } from '@server/utils/util_Planner';
import { Planner_Cell_Updates, Planner_Type } from '@ts/planner.types';
import { getByEmail } from '../planner.service';

export const updateCell = async (email: string, id: string, data: Planner_Cell_Updates) => {
  let plannerData = await getByEmail(email);

  plannerData = updatePlannerCell(plannerData, id, data);

  return await plannerData.save();
};
