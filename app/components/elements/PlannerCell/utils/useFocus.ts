import { MutableRefObject, useRef } from 'react';

const useFocus = (): [
  inputRef: MutableRefObject<HTMLInputElement>,
  setFocus: (isSelected: boolean, e: KeyboardEvent) => void
] => {
  const inputRef = useRef<HTMLInputElement>(null);

  const setFocus = (isSelected: boolean, e: KeyboardEvent) => {
    isSelected && e.key === 'Enter' && inputRef.current && inputRef.current.focus();
  };

  return [inputRef, setFocus];
};

export default useFocus;
