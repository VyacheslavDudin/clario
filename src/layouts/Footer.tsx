import { Center, Stack } from "@mantine/core";

import { Text } from "src/components";
import { ReactComponent as Logo } from "src/assets/images/logo.svg";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Center pt="xl" pb="md" bg="main.0">
      <Stack align="center" gap="xs" px="lg">
        <Logo />
        <Text ta="center">
          © {currentYear} Clario Tech DMCC
          <br />
          All rights reserved.
        </Text>
      </Stack>
    </Center>
  );
}
