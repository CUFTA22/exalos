import styles from './Typography.module.scss';
import clsx from 'clsx';
import { TypographyProps } from './types';
import React from 'react';

const Typography: React.FC<TypographyProps> = ({
  text,
  color = 'hsl(0, 0%, 91%)',
  tag = 'span',
  fontSize = 16,
  fontFamily = 'Inter',
  className,
  children,
}) => {
  const potentialStyles = {
    fontFamily: `${fontFamily}, sans-serif`,
    fontSize: fontSize + 'px',
    color,
  };

  return React.createElement(tag, {
    className: clsx(styles.lib_typography, className),
    style: potentialStyles,
    children: text || children,
  });
};

export default Typography;
