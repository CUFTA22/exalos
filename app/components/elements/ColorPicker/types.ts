export interface Props {
  isOpen: boolean;
  color: string;
  onChange: (color: string) => void;
  isDebounce?: boolean;
}
