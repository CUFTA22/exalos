import asciiPepe from 'ascii-pepe';
import { useEffect } from 'react';

const usePepe = () => {
  useEffect(() => {
    let browser;
    const regEx = /(opera|chrome|safari|firefox|msie)/i;
    const agent = navigator.userAgent.match(regEx);

    if (navigator.userAgent.match(/Edge/i) || navigator.userAgent.match(/Trident.*rv[ :]*11./i)) {
      browser = 'msie';
    } else {
      browser = agent[1].toLowerCase();
    }

    console.log(['firefox'].includes(browser) ? asciiPepe.toString() : asciiPepe.toColoredString());
  }, []);
};

export default usePepe;
