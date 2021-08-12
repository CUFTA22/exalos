import React, { useState } from 'react';
import { useNonInitialEffect } from '@hooks/useNonInitialEffect';
import { Animations, animations } from './theme';

interface Props {
  children: any;
  className?: string;
  durationOut?: number;
  animation?: keyof Animations;
  animationIn?: keyof Animations;
  animationOut?: keyof Animations;
  style?: any;
}

const PageTransition: React.FC<Props> = ({
  animation: animationBaseName = 'fade',
  animationIn = `${animationBaseName}In`,
  animationOut = `${animationBaseName}Out`,
  children,
  className,
  durationOut = 200,
  style,
}) => {
  const [animation, setAnimation] = useState<'in' | 'out'>('in');
  const [displayContent, setDisplayContent] =
    useState<React.ReactNode>(children);

  useNonInitialEffect(() => {
    setAnimation('out');
  }, [children]);

  const showDisplayContent = () => {
    if (animation === 'out') {
      setAnimation('in');
      setDisplayContent(children);
    }
  };

  const styles = {
    transition: !className && `opacity ${durationOut}ms ease-out`,
    opacity: !className && animation === 'out' ? 0 : 1,
    animationDuration: durationOut + 'ms',
    position: 'absolute',
    width: '100%',
    height: '100vh',
    zIndex: '2',
    ...style,
  };

  switch (animation) {
    case 'in':
      //@ts-ignore
      styles.animation = animations[animationIn] || animationIn;
      break;
    case 'out':
      //@ts-ignore
      styles.animation = animations[animationOut] || animationOut;
      break;
  }
  const baseClassName = className || 'animate-on-change';

  return (
    <div
      onTransitionEnd={showDisplayContent}
      onAnimationEnd={showDisplayContent}
      className={`${baseClassName} ${baseClassName}-${animation}`}
      style={styles}
    >
      {displayContent}
    </div>
  );
};

export default PageTransition;
