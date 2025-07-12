import { TParams, TSettingValueMap } from '@/@types';

export const defaultSettings: TSettingValueMap = {
  theme: { name: 'Обычная', value: 'default' },
  user_group: { name: 'Не выбранно', value: null },
  group_mode: { name: 'Обычный', value: 'default' },
};

export const settingsParams: TParams[] = [
  {
    storeKey: 'theme',
    title: 'Цветовая тема',
    options: [
      { name: 'Обычная', value: 'default' },
      { name: 'Темная', value: 'dark' },
    ],
  },
  {
    storeKey: 'group_mode',
    title: 'Вид группы',
    options: [
      { name: 'Обычный', value: 'default' },
      { name: 'Расширенный', value: 'advanced' },
    ],
  },
  {
    storeKey: 'user_group',
    title: 'Твоя группа',
    options: [{ name: 'Не выбранно', value: null }],
  },
];
