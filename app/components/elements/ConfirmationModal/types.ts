export interface CModalProps {
  isOpen: boolean;
  toggleOpen: () => void;
  action: any;
  isLoading?: boolean;
  title?: string;
  subtitle?: string;
  type?: 'cancel' | 'primary' | 'inactive';
  firstBtnTxt?: string;
  secondBtnTxt?: string;
}
