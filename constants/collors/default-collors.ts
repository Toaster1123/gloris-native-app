export const defaultThemeGroupPrimatyCollors = {
  programmer: '#4d72e2',
  mechanics: '#fe6b6b',
  electricians: '#106f40',
  MEP: '#fed910',
};

export const dafaultThemeDayPrimary = {
  Понедельник: '#f1bec0',
  Вторник: '#f1dbc0',
  Среда: '#bef1c0',
  Четверг: '#bee4f3',
  Пятница: '#bebef3',
  Суббота: '#f1bef3',
} as const;

export const defaultThemeGroupPrimary = {
  Э: defaultThemeGroupPrimatyCollors.electricians,
  ИС: defaultThemeGroupPrimatyCollors.programmer,
  МЭП: defaultThemeGroupPrimatyCollors.MEP,
  П: defaultThemeGroupPrimatyCollors.programmer,
  СЛ: defaultThemeGroupPrimatyCollors.mechanics,
  Т: defaultThemeGroupPrimatyCollors.mechanics,
  ТМ: defaultThemeGroupPrimatyCollors.mechanics,
  ТЭ: defaultThemeGroupPrimatyCollors.electricians,
  МПО: defaultThemeGroupPrimatyCollors.mechanics,
} as const;

export type TDayOfWeek = keyof typeof dafaultThemeDayPrimary;
export type TGroupName = keyof typeof defaultThemeGroupPrimary;
