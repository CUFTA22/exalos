import { Planner_Week } from '@ts/planner.types';

export const removeItemById = (arr: any[], id: any) => arr.filter((val) => val._id != id);

export const updateItemById = (arr: any[], id: string, data: any) =>
  arr.map((val) => (val._id == id ? { ...val, ...data } : val));

export const removeWeekById = (arr: Planner_Week[], id: any) =>
  arr.filter((val) => val.week_id !== id);

export const randomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const cryptoRandomNumber = (min: number, max: number) => {
  const cryptoRandom = () => {
    try {
      var cryptoRandoms,
        cryptoRandomSlices = [],
        cryptoRandom;
      while ((cryptoRandom = '.' + cryptoRandomSlices.join('')).length < 30) {
        // @ts-ignore
        cryptoRandoms = (window.crypto || window.msCrypto).getRandomValues(new Uint32Array(5));
        for (var i = 0; i < cryptoRandoms.length; i++) {
          var cryptoRandomSlice = cryptoRandoms[i].toString().slice(1, -1);
          if (cryptoRandomSlice.length > 0)
            cryptoRandomSlices[cryptoRandomSlices.length] = cryptoRandomSlice;
        }
      }
      return Number(cryptoRandom);
    } catch (e) {
      return Math.random();
    }
  };

  if (min > max)
    var temp = max,
      max = min,
      min = temp;
  (min = Math.floor(min)), (max = Math.floor(max));
  return Math.floor(cryptoRandom() * (max - min + 1) + min);
};
