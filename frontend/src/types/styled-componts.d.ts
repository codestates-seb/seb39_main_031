import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      cyan100: string;
      cyan200: string;
      cyan400: string;
      cyan700: string;

      black100: string;
      black200: string;
      black300: string;
      black400: string;
      black900: string;
      black000: string;

      red500: string;
      red600: string;
      red700: string;

      white000: string;
    };
    fontSize: {
      size08: string;
      size12: string;
      size15: string;
      size18: string;
      size20: string;
      size24: string;
      size32: string;
    };
  }
}
