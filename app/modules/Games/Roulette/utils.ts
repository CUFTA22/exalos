import { randomNumber } from '@server/utils/functions';
import { rouletteEuNumbers, rouletteUsNumbers } from '@utils/resources/rouletteNumbers';

export const findDistance = (type: 'eu' | 'us', current: number, winner: number) => {
  const numbers = type === 'eu' ? rouletteEuNumbers : rouletteUsNumbers;
  const oneLength = type === 'eu' ? 5580 : 5760;

  const findC = numbers.findIndex((val) => parseInt(val.n) === current);
  const findW = numbers.findIndex((val) => parseInt(val.n) === winner);

  //   console.log(findC, ' - ', findW, ' - ', offset);

  const diff = Math.abs(findC - findW) * 60 + oneLength + randomNumber(-25, 25);

  return { distance: findC - findW, xValue: diff };
};
