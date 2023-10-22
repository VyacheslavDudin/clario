import { Flex } from "@mantine/core";
import { ReactComponent as PriceImg } from "src/assets/images/price.svg";

export function Price() {
  return (
    <Flex
      pt={10}
      pb={20}
      pr={30}
      pl={40}
      h={100}
      w={224}
      mt={10}
      bg="#F2F8FF"
      style={{ borderRadius: 16 }}
    >
      <PriceImg />
    </Flex>
  );
}
