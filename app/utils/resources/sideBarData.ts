import {
  Cube24Regular,
  Food24Regular,
  FoodEgg24Regular,
  FoodPizza24Regular,
  Games24Regular,
  Grid24Regular,
  Home24Regular,
  MusicNote124Regular,
  Options24Regular,
} from '@fluentui/react-icons';

// --------------------------------------------------------
// AppBar Data
// --------------------------------------------------------

export const appBarItems = [
  {
    text: 'Home',
    Svg: Home24Regular,
    route: '/',
  },
  {
    text: 'Games',
    Svg: Games24Regular,
    route: '/games',
  },
  {
    text: 'Music',
    Svg: MusicNote124Regular,
    route: '/music',
  },
  {
    text: 'Demos',
    Svg: Cube24Regular,
    route: '/demos',
  },
];

// --------------------------------------------------------
// SideBar Data
// --------------------------------------------------------

export const sideBarItems = [
  {
    text: 'Apps',
    Svg: Grid24Regular,
    route: '/apps',
  },
  {
    text: 'Games',
    Svg: Games24Regular,
    route: '/games',
  },
  // {
  //   text: 'OpenAPI',
  //   Svg: Document24Regular,
  //   route: '/api-docs',
  // },
  {
    text: 'Food',
    Svg: FoodPizza24Regular,
    route: '/food',
  },
  {
    text: 'Music',
    Svg: MusicNote124Regular,
    route: '/music',
  },
  {
    text: 'Demos',
    Svg: Cube24Regular,
    route: '/demos',
  },
  {
    text: 'Options',
    Svg: Options24Regular,
    route: '/options',
  },
];

export const protectedRoutes = ['/apps'];
