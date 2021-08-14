import { useRef, useEffect } from 'react';

export default function useClickAway(callback: any) {
  const ref = useRef(null) as any;

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) callback(event);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return ref;
}
