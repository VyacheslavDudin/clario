import { ReactNode } from "react";
import { Center, Flex } from "@mantine/core";

import { Text } from "src/components";

type Props = {
  text: string;
  icon: ReactNode;
};

export function SmallOffer({ text, icon }: Props) {
  return (
    <Flex gap="xs" align="center" ta="start">
      <Center>{icon}</Center>
      <Text size="sm" fw={400}>
        {text}
      </Text>
    </Flex>
  );
}
