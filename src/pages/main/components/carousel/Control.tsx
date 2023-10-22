import { PropsWithChildren } from "react";
import { Center } from "@mantine/core";

import { ReactComponent as PrevArrow } from "src/assets/images/arrow-left.svg";
import { ReactComponent as NextArrow } from "src/assets/images/arrow-right.svg";

export function Control({ children }: PropsWithChildren) {
  return (
    <Center
      p={12}
      bg="main.0"
      style={{
        borderRadius: "50%",
        filter: "drop-shadow(0px 6px 12px rgba(0, 0, 0, 0.10));",
      }}
    >
      {children}
    </Center>
  );
}

export function PrevControl() {
  return (
    <Control>
      <PrevArrow />
    </Control>
  );
}

export function NextControl() {
  return (
    <Control>
      <NextArrow />
    </Control>
  );
}
