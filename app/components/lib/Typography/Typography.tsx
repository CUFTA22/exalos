import styles from './Typography.module.scss';
import clsx from 'clsx';
import { TypographyProps } from './types';
import React from 'react';

const Typography: React.FC<TypographyProps> = ({
  text,
  color = 'hsl(0, 0%, 91%)',
  tag = 'span',
  fSize = 16,
  fFamily = 'Inter',
  fWeight = 400,
  pad = '4px',
  className,
  children,
}) => {
  const potentialStyles = {
    fontFamily: `${fFamily}, sans-serif`,
    fontSize: fSize + 'px',
    fontWeight: fWeight,
    padding: pad,
    color,
  };

  return React.createElement(tag, {
    className: clsx(styles.lib_typography, className),
    style: potentialStyles,
    children: children || text,
  });
};

export default Typography;
