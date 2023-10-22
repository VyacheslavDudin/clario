import { Center, Image, Stack } from "@mantine/core";

import { Button, Container, FeaturePoint, Text, Title } from "src/components";
import StartWeekImg from "src/assets/images/start-week.png";

import { SpecialOffer, Price, SmallOffer } from "../../components";
import { pricingFeatures, smallOffers } from "./pricingOffer";

export function PricingSection() {
  const onClick = () => {};

  return (
    <Stack gap="md" bg="main.8">
      <Image src={StartWeekImg} />
      <Container bg="main.8" pt="md" pb="xl" gap="md">
        <Title order={2} c="main.0" lts={-0.44} lh="30px">
          Start your spy-free week for as low as
        </Title>
        <Container
          pt="lg"
          pb="30px"
          w="100%"
          bg="main.0"
          gap={0}
          style={{ borderRadius: 16 }}
        >
          <SpecialOffer />
          <Price />
          <Container mt={18} align="center" mb={32}>
            <Title order={5} fw={700} lh="34px" lts={-0.436}>
              What you get:
            </Title>
            <Stack gap={20} align="start">
              {pricingFeatures.map(({ text, icon: Icon }) => (
                <FeaturePoint
                  key={text}
                  text={text}
                  icon={
                    <Center w={23}>
                      <Icon />
                    </Center>
                  }
                  compact
                />
              ))}
            </Stack>
          </Container>
          <Button text="Try for $2.99" onClick={onClick} />
          <Text my="sm" size="xs" opacity={0.5}>
            By clicking above, you agree to try 7 days of Clario for $2.99 as a
            special offer. Your subscription will renew for $39.9/month every 2
            months. Cancel anytime or manage your subscription in your Clario
            account.
          </Text>
          <Stack gap="sm">
            {smallOffers.map(({ text, icon: Icon }) => (
              <SmallOffer key={text} text={text} icon={<Icon />} />
            ))}
          </Stack>
        </Container>
      </Container>
    </Stack>
  );
}
