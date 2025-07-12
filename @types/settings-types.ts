export type TSettingsKeys = 'theme' | 'group_mode' | 'user_group';
export type TUserGroupValues =
  | { name: 'Не выбранно'; value: null }
  | { name: string; value: string };
export type TGroupModeValues =
  | { name: 'Обычный'; value: 'default' }
  | { name: 'Расширенный'; value: 'advanced' };
export type TThemeValues =
  | { name: 'Обычная'; value: 'default' }
  | { name: 'Темная'; value: 'dark' };

export type TSettingValueMap = {
  theme: TThemeValues;
  user_group: TUserGroupValues;
  group_mode: TGroupModeValues;
};

export type TParams = {
  storeKey: TSettingsKeys;
  title: string;
  options: TSettingValueMap[TSettingsKeys][];
};
