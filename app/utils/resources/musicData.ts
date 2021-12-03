export interface ITrack {
  id: number;
  title: string;
  channel: string;
  file: string;
}

export const musicData: ITrack[] = [
  {
    id: 1,
    title: 'Nightcore - Be Magic (JJ Remix) [Jue]',
    channel: 'CLuBLioNx',
    file: '/files/music/be-magic.mp3',
  },
  {
    id: 2,
    title: 'Nightcore - Cool Your Engines (Retro Mix) [Dan Winter And Ryan T.]',
    channel: 'CLuBLioNx',
    file: '/files/music/cool-your-engines.mp3',
  },
  {
    id: 3,
    title: 'Nightcore - Take Over Control [Jaime Guerrero]',
    channel: 'CLuBLioNx',
    file: '/files/music/take-over-control.mp3',
  },
  {
    id: 4,
    title: 'Nightcore - If I Could (feat. Marco) [DJ Sanny J]',
    channel: 'CLuBLioNx',
    file: '/files/music/if-i-could.mp3',
  },
  {
    id: 5,
    title: 'Nightcore - A Neverending Dream [D-Tune & H.U.P.D. feat. Elena Gold]',
    channel: 'CLuBLioNx',
    file: '/files/music/a-neverending-dream.mp3',
  },
];
