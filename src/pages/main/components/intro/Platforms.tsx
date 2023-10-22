import { ReactNode } from "react";
import { Flex, Text } from "@mantine/core";

import { ReactComponent as AppleLogo } from "src/assets/images/apple-logo.svg";
import { ReactComponent as DesktopLogo } from "src/assets/images/desktop-logo.svg";

export function Platforms() {
  return (
    <Flex gap="xs" my="35px" align="center">
      <Platform text="iOS" icon={<AppleLogo />} />
      <Platform text="macOS, Windows" icon={<DesktopLogo />} />
    </Flex>
  );
}

type PlatformProps = {
  text: string;
  icon: ReactNode;
};

function Platform({ text, icon }: PlatformProps) {
  return (
    <Flex gap="4px" align="center">
      {icon}
      <Text fz="12px" lh="md" c="main.9" fw={700}>
        {text}
      </Text>
    </Flex>
  );
}
