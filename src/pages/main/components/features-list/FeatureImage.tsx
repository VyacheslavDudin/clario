import { Center, CenterProps, Image } from "@mantine/core";

type Props = {
  src: string;
  bg: CenterProps["bg"];
};

export function FeatureImage({ src, bg }: Props) {
  return (
    <Center px="lg" py="sm" bg={bg} style={{ borderRadius: 14 }}>
      <Image src={src} />
    </Center>
  );
}
