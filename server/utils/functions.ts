import { Planner_Week } from '@ts/planner.types';

export const removeItemById = (arr: any[], id: any) => arr.filter((val) => val._id != id);

export const updateItemById = (arr: any[], id: string, data: any) =>
  arr.map((val) => (val._id == id ? { ...val, ...data } : val));

export const removeWeekById = (arr: Planner_Week[], id: any) =>
  arr.filter((val) => val.week_id !== id);
