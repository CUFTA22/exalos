import { getDefaultSettings, getInitCalendar } from '@server/utils/util_Planner';
import { Planner_Data } from '@ts/planner.types';
import PlannerModel from './planner.model';

export const initPlanner = async (email: string) => {
  const data: Planner_Data = {
    user_email: email,
    types: [],
    settings: getDefaultSettings(),
    calendar: getInitCalendar(),
  };

  return await PlannerModel.create(data);
};

export const a = '';
