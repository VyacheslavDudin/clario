import { ReactNode } from "react";
import { Center, Flex } from "@mantine/core";

import { Text } from "..";

type Props = {
  text: string;
  icon: ReactNode;
  compact?: boolean;
};

export function FeaturePoint({ text, icon, compact }: Props) {
  return (
    <Flex gap="xs" align={compact ? "start" : "center"} ta="start">
      <Center>{icon}</Center>
      <Text size="md" fw={compact ? 400 : 700}>
        {text}
      </Text>
    </Flex>
  );
}
