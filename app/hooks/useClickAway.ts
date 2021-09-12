import { useEffect } from 'react';

export default function useClickAway(cellRef: any, callback: any) {
  const handleClickOutside = (event: any) => {
    if (
      cellRef.current &&
      !cellRef.current.contains(event.target) &&
      !event.target?.classList?.contains('no-clickaway')
    )
      callback(event);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside, true);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
    };
  }, []);
}
