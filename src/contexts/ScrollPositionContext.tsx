import { createContext, useContext, useRef, ReactNode, RefObject } from "react";
import { useIsVisible } from "src/hooks";

const ScrollPositionContext = createContext({
  isVisible: true,
  ref: null as RefObject<HTMLButtonElement> | null,
});

export const ScrollPositionProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const trackedButtonRef = useRef<HTMLButtonElement>(null);
  const isVisible = useIsVisible(trackedButtonRef);

  return (
    <ScrollPositionContext.Provider
      value={{ isVisible, ref: trackedButtonRef }}
    >
      {children}
    </ScrollPositionContext.Provider>
  );
};

export const useScrollPositionContext = () => useContext(ScrollPositionContext);
