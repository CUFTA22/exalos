import {
  AddSubtractCircle24Regular,
  CollectionsAdd24Regular,
  Flag24Regular,
  HandLeft24Regular,
  TabAdd24Regular,
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
    Icon: TabAdd24Regular,
    text: 'Hit',
    action: hit,
  },
  {
    Icon: HandLeft24Regular,
    text: 'Stand',
    action: () => stand(false),
  },
  {
    Icon: Flag24Regular,
    text: 'Surrender',
    action: surr,
  },
  {
    Icon: AddSubtractCircle24Regular,
    text: 'Double Down',
    action: double,
  },
];
