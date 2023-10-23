import { ReactNode } from "react";
import { Box, StackProps, TextProps } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

import { Container, Text } from "src/components";

export type SlideProps = {
  bg: StackProps["bg"];
  text: string;
  author: string;
  icon: ReactNode;
  textColor: TextProps["c"];
};

export function CarouselSlide({ icon, bg, text, author, textColor }: SlideProps) {
  return (
    <Carousel.Slide w="100%" h={340}>
      <Container
        py="xl"
        bg={bg}
        align="start"
        ta="start"
        w="100%"
        h={340}
        justify="space-between"
        style={{ borderRadius: 20 }}
      >
        <Box>
          {icon}
          <Text size="lg" lh="23px" fw={700} lts={-0.25} mt={30} c={textColor}>
            {text}
          </Text>
        </Box>
        <Text size="lg" lh="23px" fw={400} lts={-0.25} c={textColor}>
          {author}
        </Text>
      </Container>
    </Carousel.Slide>
  );
}
