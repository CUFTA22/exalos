const removeArrayItem = (arr: any[], value: any) => {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
};

export default removeArrayItem;
