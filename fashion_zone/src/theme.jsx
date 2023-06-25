// theme.js or theme.ts
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  // Customize your Chakra UI theme here
  styles: {
    global: {
      // Override the default background color
      body: {
        bg: "white",
        color: "black",
      },
    },
  },
});

export default theme;
