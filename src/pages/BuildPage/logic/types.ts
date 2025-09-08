import type { ReactNode } from "react";

export type LetterTheme = "celebration" | "urgent" | "informative" | "other";
export type ThemeConfigs = {
  theme: LetterTheme;
  title: string;
  description: string;
  icon: ReactNode;
  mainColor: string;
  colors: [string, string, string];
  secondaryColors: [string, string, string];
  textColors: [string, string, string];
};
