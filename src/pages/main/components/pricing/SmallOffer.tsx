import { ReactNode } from "react";
import { Box, Flex } from "@mantine/core";

import { Text } from "src/components";

type Props = {
  text: string;
  icon: ReactNode;
};

export function SmallOffer({ text, icon }: Props) {
  return (
    <Flex gap="xs" align="center" ta="start">
      <Box>{icon}</Box>
      <Text size="sm" fw={400}>
        {text}
      </Text>
    </Flex>
  );
}
