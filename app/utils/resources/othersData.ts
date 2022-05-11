// --------------------------------------------------------
// Others
// --------------------------------------------------------

import {
  Cloud24Regular,
  DocumentToolbox24Regular,
  MailInbox24Regular,
} from '@fluentui/react-icons';

import MintRegular from '@assets/logos/mint.svg';
// import ArchRegular from '@assets/logos/arch.svg';
// import KaliRegular from '@assets/logos/kali.svg';
import WireGuardRegular from '@assets/logos/wireguard.svg';

import { INavItem } from '@ts/nav.types';

export const othersData: INavItem[] = [
  {
    text: 'OpenAPI',
    Svg: DocumentToolbox24Regular,
    route: '/others/api-docs',
    hidden: false,
  },
  {
    text: 'Mint Config',
    Svg: MintRegular,
    route: '/others/linux-mint',
    hidden: false,
  },
  // {
  //   text: 'Arch Config',
  //   Svg: ArchRegular,
  //   route: '/others/linux-mint',
  //   hidden: true,
  // },
  // {
  //   text: 'Kali Config',
  //   Svg: KaliRegular,
  //   route: '/others/linux-kali',
  //   hidden: true,
  // },
  {
    text: 'WireGuard',
    Svg: WireGuardRegular,
    route: '/others/wireguard',
    hidden: false,
  },
  {
    text: 'Files',
    Svg: MailInbox24Regular,
    route: '/others/files',
    hidden: false,
  },
];
