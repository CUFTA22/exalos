import { Planner_Data, Planner_Type } from '@ts/planner.types';
import PlannerModel from '../planner.model';

const getByEmail = async (email: string) => await PlannerModel.findByUserEmail(email);

export const createType = async (email: string, type: Planner_Type) => {
  const plannerData = await getByEmail(email);
  plannerData.types.push(type);
  return await plannerData.save();
};
