import { removeArrayItem } from '@server/utils/functions';
import { Planner_Type } from '@ts/planner.types';
import { getByEmail } from '../planner.service';

export const createType = async (email: string, type: Planner_Type) => {
  const plannerData = await getByEmail(email);
  plannerData.types.push(type);
  return await plannerData.save();
};

export const updateType = async (email: string, type: Planner_Type) => {
  const plannerData = await getByEmail(email);
  plannerData.types.push(type);
  return await plannerData.save();
};

export const deleteType = async (email: string, type: Planner_Type) => {
  const plannerData = await getByEmail(email);
  plannerData.types = removeArrayItem(plannerData.types, type);
  return await plannerData.save();
};
