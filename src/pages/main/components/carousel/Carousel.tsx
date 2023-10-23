import { memo } from "react";
import { Carousel as MantineCarousel } from "@mantine/carousel";

import classes from "./Carousel.module.css";
import { CarouselSlide, SlideProps } from "./CarouselSlide";
import { PrevControl, NextControl } from "./Control";

type Props = {
  slides: SlideProps[];
};

export const Carousel = memo(({ slides }: Props) => {
  return (
    <MantineCarousel
      w="calc(100% + 48px)"
      slideGap="12px"
      draggable
      slideSize="85%"
      previousControlIcon={<PrevControl />}
      nextControlIcon={<NextControl />}
      classNames={classes}
      previousControlProps={{ style: { marginRight: 16 } }}
      styles={{
        controls: {
          justifyContent: "center",
          top: "unset",
          bottom: -25,
        },
      }}
    >
      {slides.map(({ author, text, bg, textColor, icon }) => (
        <CarouselSlide
          key={author}
          bg={bg}
          text={text}
          author={author}
          icon={icon}
          textColor={textColor}
        />
      ))}
    </MantineCarousel>
  );
});
