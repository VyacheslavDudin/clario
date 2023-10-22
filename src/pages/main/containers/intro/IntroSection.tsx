import { Button, ColoredTitle, Container, Text } from "src/components";
import FindSpywareVideo from "src/assets/videos/find-spyware.mp4";

import { FeaturesChecklist, Platforms, Video } from "../../components";

export function IntroSection() {
  const onClick = () => {};

  return (
    <Container bg="main.1" pt="54px" pb="50px">
      <ColoredTitle text="Stop your phone from being spied on" />
      <Text mt={10} mb={35} fz="lg" c="main.9" opacity={0.7} lts={-0.25}>
        Try Clario, a smart anti-spy app that effectively protects your privacy.
      </Text>
      <Button text="Protect me now" onClick={onClick} />
      <Platforms />
      <Video src={FindSpywareVideo} />
      <FeaturesChecklist />
    </Container>
  );
}
