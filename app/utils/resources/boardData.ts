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

type OptionsOpt = {
  type: 'cancel' | 'success' | 'black';
  text: string;
};

export const betOptionsOpts: OptionsOpt[] = [
  {
    type: 'cancel',
    text: 'WIN X2',
  },
  {
    type: 'success',
    text: 'WIN X14',
  },
  {
    type: 'black',
    text: 'WIN X2',
  },
];

export const type2Color = {
  success: 'green',
  cancel: 'red',
  black: 'black',
};
