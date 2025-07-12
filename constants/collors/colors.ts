import { TColors } from '@/@types';
import { useSettingsStore } from '@/store';
import { darkThemeDayPrimary, darkThemeGroupPrimary } from './dark-theme-collors';
import { dafaultThemeDayPrimary, defaultThemeGroupPrimary } from './default-theme-collors';

const defaultTheme: TColors = {
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
  blackOutOverlay: 'rgba(0, 0, 0, 0.8)',
  groupText: '#000000',
  settingsSelected: '#5d5d5d',
  settungsBackground: '#cfcfcf',
  settingsContainer: '#edeef0',
};

const darkTheme: TColors = {
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
  blackOutOverlay: 'rgba(0, 0, 0, 0.8)',
  groupText: '#D7D7D7',
  settingsSelected: '#898989',
  settungsBackground: '#101010',
  settingsContainer: '#1c1c1c',
};

export const THEMES = {
  default: defaultTheme,
  dark: darkTheme,
};

export const COLORS = THEMES.dark;
export const getColors = () => {
  const theme = useSettingsStore.getState().settings;
  console.log(theme);
  return theme && theme.theme && theme.theme.value === 'default' ? THEMES.default : THEMES.dark;
};
