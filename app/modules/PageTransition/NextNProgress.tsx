import { ProgressBarProps } from '@ts/transition.types';
import NProgress from 'nprogress';
import Router from 'next/router';
import { useEffect } from 'react';

const NextNProgress: React.FC<ProgressBarProps> = ({
  color = '#90cbf8',
  stopDelayMs = 200,
  showOnShallow = true,
  startPosition = 0,
  height = 2,
}) => {
  let timer: any;

  const routeChangeStart = (_: any, { shallow }) => {
    if (!shallow || showOnShallow) {
      NProgress.set(startPosition);
      NProgress.start();
    }
  };

  const routeChangeEnd = (_: any, { shallow }) => {
    if (!shallow || showOnShallow) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        NProgress.done(true);
      }, stopDelayMs);
    }
  };

  useEffect(() => {
    NProgress.configure({
      showSpinner: false,
      trickleSpeed: 200,
      parent: '#np-container',
    });

    Router.events.on('routeChangeStart', routeChangeStart);
    Router.events.on('routeChangeComplete', routeChangeEnd);
    Router.events.on('routeChangeError', routeChangeEnd);

    return () => {
      Router.events.off('routeChangeStart', routeChangeStart);
      Router.events.off('routeChangeComplete', routeChangeEnd);
      Router.events.off('routeChangeError', routeChangeEnd);
    };
  });

  return (
    <style jsx global>{`
      #nprogress {
        pointer-events: none;
      }
      #nprogress .bar {
        background: ${color};
        position: absolute;
        z-index: 9999;
        top: 0;
        left: 0;
        width: 100%;
        height: ${height}px;
        transition: all 200ms ease;
      }
      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100%;
        height: 100%;
        box-shadow: 0 0 10px ${color}, 0 0 5px ${color};
        opacity: 1;
      }
    `}</style>
  );
};

export default NextNProgress;
