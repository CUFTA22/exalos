import {
  CalendarLtr24Regular,
  Cube24Regular,
  Earth24Regular,
  MusicNote124Regular,
  Options24Regular,
  Rocket24Regular,
} from '@fluentui/react-icons';
import Collections from '@assets/icons/collections.svg';

export const sideBarItems = [
  {
    text: 'Planner',
    Svg: CalendarLtr24Regular,
    route: '/',
  },
  {
    text: 'Tasks',
    Svg: Collections,
    route: '/',
  },
  {
    text: 'Music',
    Svg: MusicNote124Regular,
    route: '/',
  },
  {
    text: 'Demos',
    Svg: Cube24Regular,
    route: '/',
  },
  {
    text: 'Options',
    Svg: Options24Regular,
    route: '/',
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
