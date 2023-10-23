import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { MantineProvider } from "@mantine/core";

import { MainPage } from "src/pages";
import { ButtonHandlerProvider, ScrollPositionProvider } from "src/contexts";

import "./App.css";
import { theme } from "./theme";

export function App() {
  return (
    <MantineProvider theme={theme}>
      <ButtonHandlerProvider>
        <ScrollPositionProvider>
          <MainPage />
        </ScrollPositionProvider>
      </ButtonHandlerProvider>
    </MantineProvider>
  );
}
