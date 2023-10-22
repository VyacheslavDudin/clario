import { FC, SVGProps } from "react";
import { CenterProps, Stack } from "@mantine/core";

import { FeaturePoint, Text, Title } from "src/components";

import { FeatureImage } from "./FeatureImage";

type FeaturePoint = {
  icon: FC<SVGProps<SVGElement>>;
  text: string;
};

type Props = {
  imgSrc: string;
  bg: CenterProps["bg"];
  title: string;
  subtitle: string;
  points: FeaturePoint[];
};

export function FeatureCard({ bg, imgSrc, title, subtitle, points }: Props) {
  return (
    <Stack gap="15px">
      <FeatureImage src={imgSrc} bg={bg} />
      <Stack gap={0}>
        <Title order={4} lts={-0.417}>
          {title}
        </Title>
        <Text size="lg">{subtitle}</Text>
      </Stack>
      <Stack gap="15px">
        {points.map(({ text, icon: Icon }) => (
          <FeaturePoint key={text} text={text} icon={<Icon />} />
        ))}
      </Stack>
    </Stack>
  );
}
