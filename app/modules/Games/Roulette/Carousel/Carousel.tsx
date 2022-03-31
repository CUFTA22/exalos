import clsx from 'clsx';
import { rouletteEuNumbers, rouletteUsNumbers } from '@utils/resources/rouletteNumbers';
import classes from './Carousel.module.scss';
import useRoulette from '../useRoulette';
import { findDistance } from '../utils';
import usePrevious from '@hooks/usePrevious';
import { useCallback, useEffect, useState } from 'react';
import RouletteNumber from '@element/RouletteNumber/RouletteNumber';
import { Props } from './types';

const Carousel: React.FC<Props> = ({ type }) => {
  const { isLoading, winner } = useRoulette();

  const rnb = type === 'eu' ? rouletteEuNumbers : rouletteUsNumbers;
  const numbers = rnb.concat(rnb, rnb, rnb, rnb);

  const calculateStyles = () => {
    const { xValue } = findDistance(type, 0, winner);

    return `matrix(1, 0, 0, 1, -${xValue}, 0)`;
  };

  // Easing functions
  const easeFunky = 'all 10s cubic-bezier(.3, -0.03, .24, 1.03) 0s';
  const easeNormal = 'all 10s cubic-bezier(0, 0, 0.28, 1) 0s';

  const offset = type === 'eu' ? 1140 : 1200;

  return (
    <div className={classes.carousel}>
      <div className={classes.spin_container}>
        <div
          style={{
            transition: isLoading ? easeFunky : '',
            transform: isLoading ? calculateStyles() : `matrix(1, 0, 0, 1, -${offset}, 0)`,
          }}
          className={classes.spin_items}
        >
          {numbers.map((num, i) => (
            <RouletteNumber key={i} {...num} />
          ))}
        </div>
      </div>

      <div className={classes.pointer}>
        <div className={classes.top_dot}></div>
        <div className={classes.bot_dot}></div>
      </div>

      <div className={classes.overlay}></div>
    </div>
  );
};

export default Carousel;
