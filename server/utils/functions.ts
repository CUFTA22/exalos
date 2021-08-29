export const compareObjects = (obj1: object, obj2: object) =>
  JSON.stringify(obj1) === JSON.stringify(obj2);

export const removeArrayItem = (arr: any[], value: any) => {
  const index = arr.indexOf(value);
  if (index > -1) arr.splice(index, 1);

  return arr;
};
