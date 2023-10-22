import { Button, Container, Text, Title } from "src/components";

export function FooterActionSection() {
  const onClick = () => {};

  return (
    <Container bg="main.0" pt="70px" pb="80px" gap="xl">
      <Title order={1} lts={-0.44}>
        Stop your{" "}
        <Text span inherit c="main.8">
          phone&nbsp;from being&nbsp;spied&nbsp;on
        </Text>
        .
      </Title>
      <Button text="Protect me now" onClick={onClick} />
    </Container>
  );
}
