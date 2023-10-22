import { Flex, Stack } from "@mantine/core";

import { Text, Title } from "src/components";
import { ReactComponent as TickIcon } from "src/assets/images/tick.svg";

export function FeaturesChecklist() {
  return (
    <Stack gap="12px" mt="35px">
      <Title order={5} lts={-0.25}>
        The anti-spy Clario app can:
      </Title>
      <FeatureChecklistItem text="reveal hidden spying apps" />
      <FeatureChecklistItem text="stop silent location tracking" />
      <FeatureChecklistItem text="avoid social media hacks" />
      <FeatureChecklistItem text="provide 24/7 expert security help" />
    </Stack>
  );
}

type FeatureChecklistItemProps = {
  text: string;
};

function FeatureChecklistItem({ text }: FeatureChecklistItemProps) {
  return (
    <Flex gap="xs" align="center">
      <TickIcon />
      <Text size="md">{text}</Text>
    </Flex>
  );
}
