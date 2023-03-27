import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const colors = {
  suvap: {
    darkGray: "#333333",
    lightGray: "#F0F0F0",
  },
};

const fonts = {
  body: `'Poppins', sans-serif`,
};

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

export const theme = extendTheme({ colors, fonts });
