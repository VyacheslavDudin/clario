import { Text } from "@mantine/core";

import { Title, Container } from "src/components";

import { Stepper } from "../../components";

export function StepsSection() {
  return (
    <Container bg="main.0" pt="29px" pb="37px" px="md">
      <Title order={2} mb="md" lts={-0.44}>
        All you need to do is<Text span inherit c="main.5">&nbsp;3&nbsp;easy&nbsp;steps</Text>.
      </Title>
      <Stepper />
    </Container>
  );
}
