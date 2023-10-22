import { useMemo } from "react";

import { Container, Title } from "src/components";

import { Carousel } from "../../components";
import { slides } from "./slides";

export function CarouselSection() {
  const carouselSlides = useMemo(
    () =>
      slides.map((slide) => {
        const Icon = slide.icon;
        return { ...slide, icon: <Icon /> };
      }),
    []
  );

  return (
    <Container bg="main.0" pt="54px" pb="50px">
      <Title order={2} fw={700} lts={-0.44} mb={30}>
        Let’s hear what real Clario users say.{" "}
      </Title>
      <Carousel slides={carouselSlides} />
    </Container>
  );
}
