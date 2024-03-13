import { extendTheme } from "native-base";

/**
 * Trong cac component co the dung useTheme
 */

export const newColorTheme = {
  background: {
    primary: "#3138EB",
  },
  text: {
    primary: "#1761EB",
  },
};

const appTheme = extendTheme({
  colors: newColorTheme,
  fontConfig: {
    LexendDeca: {
      300: {
        normal: "LexendDeca_300Light",
      },
      400: {
        normal: "LexendDeca_400Regular",
      },
      500: {
        normal: "LexendDeca_400Regular",
      },
      600: {
        normal: "LexendDeca_600SemiBold",
      },
      700: {
        normal: "LexendDeca_700Bold",
      },
      800:{
        normal: "LexendDeca_800ExtraBold"
      }
    },
  },
  fonts: {
    heading: "LexendDeca",
    body: "LexendDeca",
    mono: "LexendDeca",
  },
});

export type AppThemeType = typeof appTheme;
declare module "native-base" {
  interface ICustomTheme extends AppThemeType {}
}
export default appTheme;
