import { randomNumber } from '@server/utils/functions';
import { rouletteNumbers } from '@utils/resources/rouletteNumbers';

export const findDistance = (offset: number, current: number, winner: number) => {
  const findC = rouletteNumbers.findIndex((val) => val.n === current);
  const findW = rouletteNumbers.findIndex((val) => val.n === winner);

  //   console.log(findC, ' - ', findW, ' - ', offset);

  const diff = Math.abs(findC - findW) * 60 + 5580 + randomNumber(-25, 25);

  return { distance: findC - findW, xValue: diff };
};
