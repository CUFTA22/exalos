import { updatePlannerCells, addPlannerWeek, deletePlannerWeek } from '@server/utils/util_Planner';
import { Planner_Cell_Updates } from '@ts/planner.types';
import { getByEmail } from '../planner.service';

export const updateCells = async (email: string, week_id: string, data: Planner_Cell_Updates) => {
  let plannerData = await getByEmail(email);

  // @ts-ignore
  plannerData = updatePlannerCells(plannerData, week_id, data);

  return await plannerData.save();
};

export const addWeek = async (email: string) => {
  let plannerData = await getByEmail(email);

  // @ts-ignore
  plannerData = addPlannerWeek(plannerData);

  return await plannerData.save();
};

export const deleteWeek = async (email: string, week_id: string) => {
  let plannerData = await getByEmail(email);

  // @ts-ignore
  plannerData = deletePlannerWeek(plannerData, week_id);

  return await plannerData.save();
};
