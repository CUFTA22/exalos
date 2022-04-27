import {
  Cube24Regular,
  Diversity24Regular,
  Games24Regular,
  Grid24Regular,
  Home24Regular,
  MusicNote124Regular,
  Options24Regular,
} from '@fluentui/react-icons';
import YouTubeRegular from '@assets/logos/youtube.svg';

import { INavItem } from '@ts/nav.types';

// --------------------------------------------------------
// AppBar Data
// --------------------------------------------------------

export const appBarItems: INavItem[] = [
  {
    text: 'Home',
    Svg: Home24Regular,
    route: '/',
    hidden: false,
  },
  {
    text: 'Yt2Mp3',
    Svg: YouTubeRegular,
    route: '/apps/yt2mp3',
    hidden: false,
  },
  {
    text: 'Music',
    Svg: MusicNote124Regular,
    route: '/music',
    hidden: false,
  },
  {
    text: 'Demos',
    Svg: Cube24Regular,
    route: '/demos',
    hidden: false,
  },
];

// --------------------------------------------------------
// SideBar Data
// --------------------------------------------------------

export const sideBarItems: INavItem[] = [
  {
    text: 'Apps',
    Svg: Grid24Regular,
    route: '/apps',
    hidden: false,
  },
  {
    text: 'Games',
    Svg: Games24Regular,
    route: '/games',
    hidden: false,
  },
  {
    text: 'Music',
    Svg: MusicNote124Regular,
    route: '/music',
    hidden: false,
  },
  {
    text: 'Demos',
    Svg: Cube24Regular,
    route: '/demos',
    hidden: false,
  },
  {
    text: 'Others',
    Svg: Diversity24Regular,
    route: '/others',
    hidden: false,
  },
  {
    text: 'Options',
    Svg: Options24Regular,
    route: '/options',
    hidden: false,
  },
];

export const protectedRoutes = ['/apps'];
