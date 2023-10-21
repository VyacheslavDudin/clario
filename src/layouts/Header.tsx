import { Center } from "@mantine/core";
import { ReactComponent as Logo } from "src/assets/images/logo.svg";

export function Header() {
  return (
    <Center h={56} bg="main.0">
      <Logo />
    </Center>
  );
}
