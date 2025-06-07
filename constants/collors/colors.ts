import { darkThemeDayPrimary, darkThemeGroupPrimary } from './dark-theme-collors';
import { dafaultThemeDayPrimary, defaultThemeGroupPrimary } from './default-theme-collors';

const defaultTheme = {
  primary: '#417690',
  background: '#edeef0',
  textPrimary: '#000000',
  textSecondary: '#FFFFFF',
  dateBackground: '#5c8c6f',
  dateBorder: '#5c8c6f',
  dateSelectedText: '#edeef0',
  dayTextColor: '#50494f',
  dayPrimary: dafaultThemeDayPrimary,
  groupTitle: defaultThemeGroupPrimary,
  groupBorder: defaultThemeGroupPrimary,
  blackOutOverlay: 'black',
  groupText: '#000000',
};

const darkTheme = {
  primary: '#101010',
  background: '#1c1c1c',
  textPrimary: '#D7D7D7',
  textSecondary: '#D7D7D7',
  dateBackground: '#3a3a3a',
  dateBorder: '#3a3a3a',
  dateSelectedText: '#E5E4E4',
  dayTextColor: '#D7D7D7',
  dayPrimary: darkThemeDayPrimary,
  groupTitle: darkThemeGroupPrimary,
  groupBorder: darkThemeGroupPrimary,
  blackOutOverlay: 'rgba(0, 0, 0, 0.7)',
  groupText: '#D7D7D7',
};

const lightTheme = {
  ...defaultTheme,
};

const darkDefaultTheme = {
  ...darkTheme,
};
export const THEMES = {
  default: defaultTheme,
  darkDefault: darkDefaultTheme,
  dark: darkTheme,
  light: lightTheme,
};

export const COLORS = THEMES.dark;
