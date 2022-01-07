export const betChangeOpts = (coins: number) => [
  {
    label: '+ 1',
    value: 1,
  },
  {
    label: '+ 10',
    value: 10,
  },
  {
    label: '+ 100',
    value: 100,
  },
  {
    label: 'All in',
    value: coins,
  },
  {
    label: '1 / 2',
    value: coins / 2,
  },
];
