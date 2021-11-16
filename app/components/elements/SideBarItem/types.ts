import { IFluentIconsProps } from '@fluentui/react-icons';

export interface BaseItem {
  Svg: any;
  text: string;
  route: string;
}
export interface Props extends BaseItem {
  isNew?: boolean;
  options?: BaseItem[];
}
