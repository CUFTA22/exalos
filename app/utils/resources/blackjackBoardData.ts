import {
  AddSubtractCircle24Filled,
  Flag24Filled,
  HandLeft24Filled,
  TabAdd24Filled,
} from '@fluentui/react-icons';

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

type ActionsOpt = {
  Icon: any;
  text: string;
  action: () => void;
};

export const betActionsOpts = (
  hit: () => void,
  stand: (prop?: boolean) => void,
  surr: () => void,
  double: () => void
): ActionsOpt[] => [
  {
    Icon: TabAdd24Filled,
    text: 'Hit',
    action: hit,
  },
  {
    Icon: HandLeft24Filled,
    text: 'Stand',
    action: () => stand(false),
  },
  {
    Icon: Flag24Filled,
    text: 'Surrender',
    action: surr,
  },
  {
    Icon: AddSubtractCircle24Filled,
    text: 'Double Down',
    action: double,
  },
];
