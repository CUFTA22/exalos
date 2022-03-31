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

const Animate: React.FC<Props> = ({
  animation: animationBaseName,
  animationIn = `${animationBaseName}In`,
  animationOut = `${animationBaseName}Out`,
  children,
  className,
  durationOut = 220,
  style,
}) => {
  const [skipAnim, setSkipAnim] = useState(false);

  const [animation, setAnimation] = useState('in');
  const [displayContent, setDisplayContent] = useState(children);

  useNonInitialEffect(() => {
    // Prevent rerendering when it gets same children
    // if (JSON.stringify(simplify(displayContent)) === JSON.stringify(simplify(children))) return;

    setAnimation('out');

    // Fix a bug where animation would sometimes be stuck
    // on out and no content would be displayed
    let timeout = setTimeout(forceDisplayContent, 200);
    return () => clearTimeout(timeout);
  }, [children]);

  const showDisplayContent = () => {
    if (animation === 'out') {
      setAnimation('in');
      setDisplayContent(children);
    }
  };

  const forceDisplayContent = () => {
    setAnimation('in');
    setDisplayContent(children);
  };

  const styles = skipAnim
    ? { ...style }
    : {
        transition: !className && `opacity ${durationOut}ms ease-out`,
        opacity: !className && animation === 'out' ? 0 : 1,
        animationDuration: durationOut + 'ms',
        ...style,
      };

  switch (animation) {
    case 'in':
      //@ts-ignore
      classes.animation = skipAnim ? 'none' : animations[animationIn] || animationIn;
      break;
    case 'out':
      //@ts-ignore
      classes.animation = skipAnim ? 'none' : animations[animationOut] || animationOut;
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

export default Animate;
