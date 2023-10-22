import { Title, Container } from "src/components";

import { FeatureCard } from "../../components";
import { featuresList } from "./featuresList";
import { Stack } from "@mantine/core";

export function FeaturesSection() {

  return (
    <Container bg="main.0" pt="20px" pb="40px">
      <Title order={2} mb="30px">
        Clario helps you easily avoid spying.
      </Title>
      <Stack gap="xl">
        {featuresList.map(({ title, imgSrc, bg, subtitle, featurePoints }) => (
          <FeatureCard
            key={title}
            imgSrc={imgSrc}
            bg={bg}
            title={title}
            subtitle={subtitle}
            points={featurePoints}
          />
        ))}
      </Stack>
    </Container>
  );
}
