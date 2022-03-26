// --------------------------------------------------------
// WebGL Demos
// --------------------------------------------------------

import { Beaker24Regular, Cube24Regular, Earth24Regular } from '@fluentui/react-icons';
import { INavItem } from '@ts/nav.types';

export const demoItems: INavItem[] = [
  {
    text: 'Test',
    Svg: Beaker24Regular,
    route: '/demos/test',
    hidden: false,
  },
  {
    text: 'Globe',
    Svg: Earth24Regular,
    route: '/',
    hidden: true,
  },
  // {
  //   text: 'Space',
  //   Svg: Rocket24Regular,
  //   route: '/',
  //   hidden: true
  // },
  // {
  //   text: 'City 17',
  //   Svg: City24Regular,
  //   route: '/',
  //   hidden: true
  // },
];
