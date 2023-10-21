import { Center, Stack, Text } from "@mantine/core";
import { ReactComponent as Logo } from "src/assets/images/logo.svg";

export function Footer() {
  return (
    <Center pt="xl" pb="md" bg="main.0">
      <Stack align="center" gap="xs" px="lg">
        <Logo />
        <Text ta="center">
          © 2023 Clario Tech DMCC
          <br />
          All rights reserved.
        </Text>
      </Stack>
    </Center>
  );
}
