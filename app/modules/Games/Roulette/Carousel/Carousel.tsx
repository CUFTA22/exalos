import clsx from 'clsx';
import { rouletteNumbers as rnb } from '@utils/resources/rouletteNumbers';
import styles from './Carousel.module.scss';
import useRoulette from '../useRoulette';
import { findDistance } from '../utils';
import usePrevious from '@hooks/usePrevious';
import { useCallback, useEffect, useState } from 'react';
import RouletteNumber from '@element/RouletteNumber/RouletteNumber';

const Carousel = () => {
  const { isLoading, winner } = useRoulette();

  const numbers = rnb.concat(rnb, rnb, rnb, rnb);

  const calculateStyles = () => {
    const { xValue } = findDistance(1140, 0, winner);

    return `matrix(1, 0, 0, 1, -${xValue}, 0)`;
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.spin_container}>
        <div
          style={{
            transition: isLoading ? 'all 10s cubic-bezier(0, 0, 0.28, 1) 0s' : '',
            transform: isLoading ? calculateStyles() : `matrix(1, 0, 0, 1, -1140, 0)`,
          }}
          className={styles.spin_items}
        >
          {numbers.map((num, i) => (
            <RouletteNumber key={i} {...num} />
          ))}
        </div>
      </div>

      <div className={styles.pointer}>
        <div className={styles.top_dot}></div>
        <div className={styles.bot_dot}></div>
      </div>
    </div>
  );
};

export default Carousel;
