import { PropsWithChildren } from "react";
import { Stack } from "@mantine/core";

import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ children }: PropsWithChildren) {
  return (
    <Stack>
      <Header />
      {children}
      <Footer />
    </Stack>
  );
}
