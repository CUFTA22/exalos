import { useEffect, useRef, useState } from 'react';

const useEventListener = (eventName: keyof WindowEventMap, handler: any, element?: any) => {
  const [el, setEl] = useState(element);
  // Create a ref that stores handler
  const savedHandler = useRef<any>();

  useEffect(() => {
    !el && setEl(window);
  }, []);

  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(
    () => {
      // Make sure element supports addEventListener
      // On
      const isSupported = el && el.addEventListener;
      if (!isSupported) return;

      // Create event listener that calls handler function stored in ref
      const eventListener = (event: Event) => savedHandler.current(event);

      // Add event listener
      el.addEventListener(eventName, eventListener);

      // Remove event listener on cleanup
      return () => {
        el.removeEventListener(eventName, eventListener);
      };
    },
    [eventName, el] // Re-run if eventName or element changes
  );
};

export default useEventListener;
