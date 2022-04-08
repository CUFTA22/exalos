// --------------------------------------------------------
// WebGL Demos
// --------------------------------------------------------

import { Beaker24Regular, Earth24Regular } from '@fluentui/react-icons';
import { INavItem } from '@ts/nav.types';

import GlobeIcon from '../../../public/assets/icons/dotted_globe.svg';
import CitadelIcon from '../../../public/assets/logos/citadel.svg';

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
    route: '/demos/test',
    hidden: true,
  },
  // {
  //   text: 'City 17',
  //   Svg: CitadelIcon,
  //   route: '/demos/test',
  //   hidden: true,
  // },
  // {
  //   text: 'Space',
  //   Svg: Rocket24Regular,
  //   route: '/demos/space',
  //   hidden: true
  // },
];
