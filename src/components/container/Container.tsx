import { PropsWithChildren } from "react";
import { Stack, StackProps } from "@mantine/core";

export function Container({
  children,
  ...props
}: PropsWithChildren<StackProps>) {
  return (
    <Stack px="lg" ta="center" align="center" gap={0} {...props}>
      {children}
    </Stack>
  );
}
