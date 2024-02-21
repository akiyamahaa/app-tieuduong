import { extendTheme } from "native-base";

/**
 * Trong cac component co the dung useTheme
 */

export const newColorTheme = {
  background: {
    primary: "#1761EB",
  },
  text: {
    primary: "#1761EB",
  },
};

const appTheme = extendTheme({
  colors: newColorTheme,
  fontConfig: {
    Quicksand: {
      300: {
        normal: "Quicksand_300Light",
      },
      400: {
        normal: "Quicksand_400Regular",
      },
      500: {
        normal: "Quicksand_400Regular",
      },
      600: {
        normal: "Quicksand_600SemiBold",
      },
      700: {
        normal: "Quicksand_700Bold",
      },
    },
  },
  fonts: {
    heading: "Quicksand",
    body: "Quicksand",
    mono: "Quicksand",
  },
});

export type AppThemeType = typeof appTheme;
declare module "native-base" {
  interface ICustomTheme extends AppThemeType {}
}
export default appTheme;
