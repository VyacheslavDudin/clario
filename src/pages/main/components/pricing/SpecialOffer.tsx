import { useRef } from "react";
import { Flex } from "@mantine/core";

import { Text } from "src/components";
import { useCountdown, useIsVisible } from "src/hooks";

export function SpecialOffer() {
  const ref = useRef(null);
  const isVisible = useIsVisible(ref);
  const { mins, secs, isActive } = useCountdown({ shouldStart: isVisible });

  return (
    <Flex
      ref={ref}
      pt={2}
      pb={3}
      px={12}
      h={25}
      w="100%"
      justify="space-between"
      align="center"
      bg="main.4"
      style={{ borderRadius: 4 }}
    >
      <Text size="md" fz={11} fw={400} c="main.6">
        {isActive
          ? "Special offer valid for"
          : "Special offer no longer active"}
      </Text>
      {isActive && (
        <Flex gap={2}>
          <Text size="md" fz={16} fw={700} w={45} ta="start" c="main.6">
            {mins}:{secs}
          </Text>
          <Text size="lg" fz={11} fw={400} c="main.6">
            min
          </Text>
        </Flex>
      )}
    </Flex>
  );
}
