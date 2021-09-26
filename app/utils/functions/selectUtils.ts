import { Planner_Type } from '@ts/planner.types';

// Transforms values for React Select
// If you pass in firstItem it will put it on top
// From: string[]
// To: { value: string, label: string }[]

export const transformToSelectValues = (
  arr: Planner_Type[],
  fieldLabel?: string,
  fieldValue?: string,
  firstItem?: { value: string; label: string }
) => {
  const tempArr = [] as { value: string; label: string }[];
  firstItem && tempArr.push(firstItem);
  arr?.forEach((val: any) => tempArr.push({ label: val[fieldLabel], value: val[fieldValue] }));
  return tempArr;
};

// Transforms values for React Select
// If you pass in firstItem it will put it on top
// From: string[]
// To: { value: string, label: string }[]

export const findTypeAndTransform = (arr: Planner_Type[], type_id: string) => {
  if (!arr || !type_id) return null;

  const found = arr?.find((type) => type._id === type_id);

  return { value: found?._id, label: found?.name };
};
