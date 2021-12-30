import {
  AppRecent24Regular,
  ArrowTrendingLines24Regular,
  Beaker24Regular,
  CalendarLtr24Regular,
  City24Regular,
  ColumnTriple24Regular,
  Cube24Regular,
  DataPie24Regular,
  DataTrending24Regular,
  Document24Regular,
  Earth24Regular,
  Games24Regular,
  Grid24Regular,
  Home24Regular,
  MusicNote124Regular,
  Options24Regular,
  Payment24Regular,
  Play24Regular,
  Premium24Regular,
  Rocket24Regular,
  SquareMultiple24Regular,
  Toolbox24Regular,
  Trophy24Regular,
} from '@fluentui/react-icons';

// --------------------------------------------------------
// App Data
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
    Svg: Games24Regular,
    route: '/games',
  },
  // {
  //   text: 'OpenAPI',
  //   Svg: Document24Regular,
  //   route: '/api-docs',
  // },
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
  // {
  //   text: 'Tasks',
  //   Svg: SquareMultiple24Regular,
  //   route: '/apps/tasks',
  // },
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
    text: 'EU Roulette',
    Svg: Premium24Regular,
    route: '/games/roulette/eu',
  },
  {
    text: 'US Roulette',
    Svg: Premium24Regular,
    route: '/games/roulette/us',
  },
  {
    text: '21 Blackjack',
    Svg: AppRecent24Regular,
    route: '/games/blackjack',
  },
  // {
  //   text: 'Crash',
  //   Svg: DataTrending24Regular,
  //   route: '/games',
  // },
  // {
  //   text: 'Slots',
  //   Svg: ColumnTriple24Regular,
  //   route: '/games/blackjack',
  // },
];

// --------------------------------------------------------
// WebGL Demos
// --------------------------------------------------------

export const demoItems = [
  {
    text: 'Test',
    Svg: Beaker24Regular,
    route: '/demos/test',
  },
  {
    text: 'Chest',
    Svg: Toolbox24Regular,
    route: '/demos/chest',
  },
  // {
  //   text: 'Globe',
  //   Svg: Earth24Regular,
  //   route: '/',
  // },
  // {
  //   text: 'Space',
  //   Svg: Rocket24Regular,
  //   route: '/',
  // },
  // {
  //   text: 'City 17',
  //   Svg: City24Regular,
  //   route: '/',
  // },
];

export const protectedRoutes = ['/apps'];
