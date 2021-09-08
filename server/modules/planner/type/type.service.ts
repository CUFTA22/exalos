import { removeItemById, updateItemById } from '@server/utils/functions';
import { getLeanTypes } from '@server/utils/util_Planner';
import { Planner_Type } from '@ts/planner.types';
import { getByEmail } from '../planner.service';

export const createType = async (email: string, type: Planner_Type) => {
  const plannerData = await getByEmail(email);

  plannerData.types.push(type);

  return await plannerData.save();
};

export const updateType = async (email: string, id: string, type: Planner_Type) => {
  const plannerData = await getByEmail(email);

  plannerData.types = updateItemById(getLeanTypes(plannerData.types), id, type);

  return await plannerData.save();
};

export const deleteType = async (email: string, id: string) => {
  const plannerData = await getByEmail(email);

  plannerData.types = removeItemById(plannerData.types, id);

  return await plannerData.save();
};
