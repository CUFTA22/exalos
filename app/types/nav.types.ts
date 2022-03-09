import { IFluentIconsProps } from '@fluentui/react-icons';

export interface INavItem {
  text: string;
  Svg: React.FC;
  route: string;
  hidden: boolean;
}
