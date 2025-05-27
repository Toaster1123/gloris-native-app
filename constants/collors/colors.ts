import { dafaultThemeDayPrimary, defaultThemeGroupPrimary } from './default-collors';

const defaultTheme = {
  primary: '#417690',
  background: '#edeef0',
  textPrimary: '#000000',
  textSecondary: '#FFFFFF',
  border: '#D0D0D0',
  dateBackground: '#5c8c6f',
  dateBorder: '#5c8c6f',
  dateSelectedText: '#edeef0',
  dayTextColor: '#50494f',
  dayPrimary: dafaultThemeDayPrimary,
  groupPrimary: defaultThemeGroupPrimary,
  blackOutOverlay: 'black',
  groupText: '#000000',
};

const darkTheme = {};

const lightTheme = {};

export const THEMES = {
  default: defaultTheme,
  dark: darkTheme,
  light: lightTheme,
};

export const COLORS = THEMES.default;
