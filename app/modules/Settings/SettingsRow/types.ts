import { FluentIconsProps } from '@fluentui/react-icons';
import React from 'react';

export interface Props {
  value: boolean;
  toggleValue: () => void;
  text: string;
  Icon: React.FC<FluentIconsProps>;
}
