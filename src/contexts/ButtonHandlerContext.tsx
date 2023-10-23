import { createContext, useContext, useRef, ReactNode, RefObject } from "react";

const HEADER_HEIGHT = "56px";

const ButtonHandlerContext = createContext({
  handleButtonClick: () => {},
  ref: null as RefObject<HTMLDivElement> | null,
});

export const ButtonHandlerProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const countRef = useRef(0);
  const pricingSectionRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    countRef.current += 1;
    if (pricingSectionRef.current) {
      pricingSectionRef.current.style.scrollMargin = HEADER_HEIGHT;
      pricingSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      console.log(`Scroll To Price: ${countRef.current}`);
    }
  };

  return (
    <ButtonHandlerContext.Provider
      value={{ handleButtonClick, ref: pricingSectionRef }}
    >
      {children}
    </ButtonHandlerContext.Provider>
  );
};

export const useButtonHandlerContext = () => useContext(ButtonHandlerContext);
