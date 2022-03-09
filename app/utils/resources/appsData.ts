// --------------------------------------------------------
// Apps
// --------------------------------------------------------

import {
  CalendarLtr24Regular,
  DataPie24Regular,
  FoodPizza24Regular,
  MusicNote124Regular,
} from '@fluentui/react-icons';
import { INavItem } from '@ts/nav.types';

export const appItems: INavItem[] = [
  {
    text: 'Statistics',
    Svg: DataPie24Regular,
    route: '/apps/stats',
    hidden: true,
  },
  {
    text: 'Planner',
    Svg: CalendarLtr24Regular,
    route: '/apps/planner',
    hidden: false,
  },

  {
    text: 'YT2MP3',
    Svg: MusicNote124Regular,
    route: '/apps/yt2mp3',
    hidden: false,
  },
  {
    text: 'Food',
    Svg: FoodPizza24Regular,
    route: '/apps/food',
    hidden: true,
  },
  // {
  //   text: 'Finances',
  //   Svg: Payment24Regular,
  //   route: '/finances',
  //   hidden: true
  // },
];
