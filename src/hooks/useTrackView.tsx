import { RefObject, useEffect, useRef } from "react";
import { useIsVisible } from ".";

export function useTrackView(ref: RefObject<HTMLElement>, name: string) {
  const isVisitedRef = useRef(false);
  const isVisible = useIsVisible(ref);

  useEffect(() => {
    if (isVisible && !isVisitedRef.current) {
      isVisitedRef.current = true;
      console.log(`Feature Shown: <${name}>`);
    }
  }, [ref, isVisible, name]);
}
