// --------------------------------------------------------
// Others
// --------------------------------------------------------

import { Cloud24Regular, DocumentToolbox24Regular } from '@fluentui/react-icons';
import MintRegular from '@assets/logos/mint.svg';

import { INavItem } from '@ts/nav.types';

export const othersData: INavItem[] = [
  {
    text: 'OpenAPI',
    Svg: DocumentToolbox24Regular,
    route: '/others/api-docs',
    hidden: false,
  },
  //   {
  //     text: 'Files',
  //     Svg: Cloud24Regular,
  //     route: '/others/files',
  //     hidden: false,
  //   },
  {
    text: 'Mint Config',
    Svg: MintRegular,
    route: '/others/linux-mint',
    hidden: false,
  },
];
