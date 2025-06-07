import { dafaultThemeDayPrimary, defaultThemeGroupPrimary } from './default-theme-collors';

const darkThemeGroupCollor = '#292929';
const darkThemeDayCollor = '#292929';

export const darkThemeDayPrimary = Object.fromEntries(
  Object.keys(dafaultThemeDayPrimary).map((key) => [key, darkThemeDayCollor]),
);

export const darkThemeGroupPrimary = Object.fromEntries(
  Object.keys(defaultThemeGroupPrimary).map((key) => [key, darkThemeGroupCollor]),
) as typeof defaultThemeGroupPrimary;
