import {
  Beaker24Regular,
  CalendarLtr24Regular,
  Cube24Regular,
  DataPie24Regular,
  Document24Regular,
  Earth24Regular,
  Grid24Regular,
  MusicNote124Regular,
  Options24Regular,
  Payment24Regular,
  Play24Regular,
  Premium24Regular,
  Rocket24Regular,
  SquareMultiple24Regular,
  Trophy24Regular,
} from '@fluentui/react-icons';

// --------------------------------------------------------
// Apps
// --------------------------------------------------------

export const appItems = [
  {
    text: 'Statistics',
    Svg: DataPie24Regular,
    route: '/apps/stats',
  },
  {
    text: 'Planner',
    Svg: CalendarLtr24Regular,
    route: '/apps/planner',
  },
  {
    text: 'Tasks',
    Svg: SquareMultiple24Regular,
    route: '/apps/tasks',
  },
  // {
  //   text: 'Finances',
  //   Svg: Payment24Regular,
  //   route: '/finances',
  // },
];

// --------------------------------------------------------
// Games
// --------------------------------------------------------

export const gameItems = [
  {
    text: 'Roulette',
    Svg: Premium24Regular,
    route: '/games/roulette',
  },
];

// --------------------------------------------------------
// Sidebar Data
// --------------------------------------------------------

export const sideBarItems = [
  {
    text: 'Apps',
    Svg: Grid24Regular,
    route: '/apps',
  },
  {
    text: 'Games',
    Svg: Trophy24Regular,
    route: '/games',
  },
  {
    text: 'Demos',
    Svg: Cube24Regular,
    route: '/demos',
  },
  // {
  //   text: 'OpenAPI',
  //   Svg: Document24Regular,
  //   route: '/api-docs',
  // },
  // {
  //   text: 'Music',
  //   Svg: MusicNote124Regular,
  //   route: '/music',
  // },
  {
    text: 'Options',
    Svg: Options24Regular,
    route: '/options',
  },
];

// --------------------------------------------------------
// WebGL Demos
// --------------------------------------------------------

export const demoItems = [
  {
    text: 'Test',
    Svg: Beaker24Regular,
    route: '/',
  },
  {
    text: 'Globe',
    Svg: Earth24Regular,
    route: '/',
  },
  {
    text: 'Space',
    Svg: Rocket24Regular,
    route: '/',
  },
];

export const protectedRoutes = ['/apps', '/games'];
