import { memo } from "react";
import { Accordion } from "@mantine/core";
import { Text } from "src/components";

type Props = {
  title: string;
  description: string;
  active?: boolean;
};

export const Step = memo(({ title, description, active }: Props) => {
  const activeColor = active ? "main.5" : "main.9";

  return (
    <Accordion.Item
      value={title}
      miw={160}
      w="100%"
      p={0}
      style={{ backgroundColor: "transparent" }}
    >
      <Accordion.Control
        p={0}
        h={28}
        style={{ outline: "none" }}
        styles={{
          chevron: {
            fill: active
              ? "var(--mantine-color-main-5)"
              : "var(--mantine-color-main-9)",
          },
          control: { outline: "none" },
        }}
      >
        <Text size="xl" lts={-0.25} c={activeColor}>
          {title}
        </Text>
      </Accordion.Control>
      <Accordion.Panel p={0} mt={12} styles={{ content: { padding: 0 } }}>
        <Text size="md">{description}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  );
});
