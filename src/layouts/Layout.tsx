import { PropsWithChildren } from "react";
import { Stack } from "@mantine/core";

import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ children }: PropsWithChildren) {
  return (
    <Stack gap={0}>
      <Header />
      {children}
      <Footer />
    </Stack>
  );
}
