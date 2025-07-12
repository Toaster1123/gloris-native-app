import { TSettingsKeys, TSettingValueMap } from '@/@types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';

type TSettingsStore = {
  settings: TSettingValueMap;
  saveSetting: (key: TSettingsKeys, value: string) => Promise<void>;
  getSetting: (key: TSettingsKeys) => Promise<string | null>;
  initSettings: () => Promise<void>;
};

const defaultValues: TSettingValueMap = {
  theme: { name: 'Обычная', value: 'default' },
  user_group: { name: 'Не выбранно', value: null },
  group_mode: { name: 'Обычный', value: 'default' },
};

export const useSettingsStore = create<TSettingsStore>((set, get) => ({
  settings: defaultValues,
  saveSetting: async (key: TSettingsKeys, value: string) => {
    try {
      const savedValue = await AsyncStorage.getItem(key);
      if (savedValue !== value) {
        await AsyncStorage.setItem(key, value);
        set((state) => ({
          settings: {
            ...state.settings,
            [key]: value,
          },
        }));
      }
    } catch (error) {
      console.error('Ошибка при сохранении настройки', error);
    }
  },
  getSetting: async (key: TSettingsKeys) => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      console.error('Ошибка при получении настройки', error);
      return null;
    }
  },
  initSettings: async () => {
    const settingsObj: Record<TSettingsKeys, { name: string; value: string | null }> = {
      theme: defaultValues.theme,
      user_group: defaultValues.user_group,
      group_mode: defaultValues.group_mode,
    };

    for (const key of Object.keys(defaultValues) as TSettingsKeys[]) {
      const savedValue = await AsyncStorage.getItem(key);
      if (savedValue !== null) {
        settingsObj[key] = savedValue;
      } else {
        await AsyncStorage.setItem(key, settingsObj[key]);
      }
    }

    set({ settings: settingsObj as TSettingValueMap });
  },
}));
