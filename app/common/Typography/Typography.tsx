import classes from './Typography.module.scss';
import clsx from 'clsx';
import { TypographyProps } from './types';
import React from 'react';

const Typography: React.FC<TypographyProps> = ({
  text,
  color = 'primary',
  tag = 'span',
  fSize = 16,
  fFamily = 'Inter',
  fWeight = 400,
  pad = '0px',
  maxLines = 1,
  className,
  children,
  width,
}) => {
  const potentialStyles = {
    fontFamily: `${fFamily}, sans-serif`,
    fontSize: fSize + 'px',
    fontWeight: fWeight,
    padding: pad,
    color: color === 'primary' ? 'hsl(0, 0%, 91%)' : 'hsl(240, 28%, 64%)',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: maxLines,
    lineClamp: maxLines,
    WebkitBoxOrient: 'vertical',
    width,
  };

  return React.createElement(tag, {
    className: clsx(classes.lib_typography, className),
    style: potentialStyles,
    children: children || text,
  });
};

export default Typography;
