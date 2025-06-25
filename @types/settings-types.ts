export type TSettingsKeys = 'theme' | 'group_mode' | 'user_group';
export type TUserGroupValues = 'Не выбранно' | string;
export type TGroupModeValues = 'Обычный' | 'Расширенный';
export type TThemeValues = 'Обычная' | 'Темная';
export type TSettingValueMap = {
  theme: TThemeValues;
  group_mode: TGroupModeValues;
  user_group: TUserGroupValues;
};
