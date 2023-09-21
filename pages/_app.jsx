import "@/styles/globals.css";
import "@mantine/core/styles.css";
import VecAppShell from "@/components/VecAppShell";

import { MantineProvider, createTheme } from "@mantine/core";

const theme = createTheme({
  /** Put your mantine theme override here */
  fontFamily: "Lato, sans-serif",
});

export default function App({ Component, pageProps }) {
  return (
    <MantineProvider theme={theme}>
      <VecAppShell>
        <Component {...pageProps} />
      </VecAppShell>
    </MantineProvider>
  );
}
