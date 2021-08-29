import { getDefaultSettings, getInitCalendar } from '@server/utils/util_Planner';
import { Planner_Data } from '@ts/planner.types';
import PlannerModel from './planner.model';

// ---------------------------------------------------------------------------------------------
// Utility functions
// ---------------------------------------------------------------------------------------------

export const getByEmail = async (email: string) => await PlannerModel.findByUserEmail(email);

export const initPlanner = async (email: string) => {
  const data: Planner_Data = {
    user_email: email,
    types: [],
    settings: getDefaultSettings(),
    calendar: getInitCalendar(),
  };
  const res = await PlannerModel.create(data);
  return res;
};

export const getData = async (email: string) => {
  const data = await getByEmail(email);

  return data;
};
