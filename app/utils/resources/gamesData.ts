// --------------------------------------------------------
// Games
// --------------------------------------------------------

import {
  AppRecent24Regular,
  ColumnTriple24Regular,
  MusicNote124Regular,
  Premium24Regular,
} from '@fluentui/react-icons';

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
  {
    text: 'Slots',
    Svg: ColumnTriple24Regular,
    route: '/games/slots',
  },
  // {
  //   text: 'Tetris',
  //   Svg: TetrisApp24Regular,
  //   route: '/games/slots',
  // },

];
