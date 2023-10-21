import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import "./App.css";
import { theme } from "./theme";

export function App() {
  return <MantineProvider theme={theme}>App</MantineProvider>;
}
