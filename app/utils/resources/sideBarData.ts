import {
  CalendarLtr24Regular,
  Cube24Regular,
  DataPie24Regular,
  Earth24Regular,
  MusicNote124Regular,
  Options24Regular,
  Payment24Regular,
  Rocket24Regular,
} from '@fluentui/react-icons';
import Collections from '@assets/icons/collections.svg';

export const sideBarItems = [
  {
    text: 'Statistics',
    Svg: DataPie24Regular,
    route: '/',
  },
  {
    text: 'Planner',
    Svg: CalendarLtr24Regular,
    route: '/planner',
  },
  {
    text: 'Tasks',
    Svg: Collections,
    route: '/tasks',
  },
  {
    text: 'Finances',
    Svg: Payment24Regular,
    route: '/finances',
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

const demoItems = [
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

// export const protectedRoutes = ['/planner', '/tasks', '/finances'];
export const protectedRoutes = ['/tasks', '/finances'];
