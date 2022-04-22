// --------------------------------------------------------
// Games
// --------------------------------------------------------

import { AppRecent24Regular, Premium24Regular } from '@fluentui/react-icons';

import VLIcon from '../../../public/assets/logos/voxel_life.svg';

import { INavItem } from '@ts/nav.types';

export const gameItems: INavItem[] = [
  {
    text: 'EU Roulette',
    Svg: Premium24Regular,
    route: '/games/roulette/eu',
    hidden: false,
  },
  {
    text: 'US Roulette',
    Svg: Premium24Regular,
    route: '/games/roulette/us',
    hidden: false,
  },
  {
    text: '21 Blackjack',
    Svg: AppRecent24Regular,
    route: '/games/blackjack',
    hidden: false,
  },
  {
    text: 'Voxel Life',
    Svg: VLIcon,
    route: '/games/vl',
    hidden: true,
  },
];
