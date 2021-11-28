const objectCompare = (o1: any, o2: any) => {
  return JSON.stringify(o1) === JSON.stringify(o2);
};

export default objectCompare;
