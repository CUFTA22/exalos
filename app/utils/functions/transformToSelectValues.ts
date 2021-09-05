// Transforms values for React Select
// If you pass in firstItem it will put it on top
// From: string[]
// To: { value: string, label: string }[]
export const transformToSelectValues = (
  arr: any[],
  field?: string,
  firstItem?: { value: string; label: string }
) => {
  const tempArr = [] as { value: string; label: string }[];
  firstItem && tempArr.push(firstItem);
  arr?.forEach((val: any) => tempArr.push({ value: val[field], label: val[field] }));
  return tempArr;
};
