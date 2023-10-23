import { Flex } from "@mantine/core";

import { Button } from "src/components";
import {
  useButtonHandlerContext,
  useScrollPositionContext,
} from "src/contexts";
import { ReactComponent as Logo } from "src/assets/images/logo.svg";

export function Header() {
  const { handleButtonClick } = useButtonHandlerContext();
  const { isVisible: isButtonVisible } = useScrollPositionContext();
  const isSticky = !isButtonVisible;

  return (
    <Flex
      h={56}
      bg="main.0"
      pos={isSticky ? "sticky" : "static"}
      px="lg"
      py="12px"
      align="center"
      justify={isSticky ? "space-between" : "center"}
      top={isSticky ? 0 : undefined}
      style={{ zIndex: 5 }}
    >
      <Logo />
      {isSticky && (
        <Button text="Protect me now" onClick={handleButtonClick} size="sm" />
      )}
    </Flex>
  );
}
