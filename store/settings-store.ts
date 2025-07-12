import { TSettingsKeys, TSettingValueMap } from '@/@types';
import { defaultSettings } from '@/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';

type TSettingsStore = {
  settings: TSettingValueMap;
  saveSetting: (key: TSettingsKeys, value: { name: string; value: string | null }) => Promise<void>;
  getSetting: (key: TSettingsKeys) => Promise<{ name: string; value: string | null } | null>;
  initSettings: () => Promise<void>;
};

export const useSettingsStore = create<TSettingsStore>((set) => ({
  settings: defaultSettings,
  saveSetting: async (key: TSettingsKeys, value: { name: string; value: string | null }) => {
    try {
      const savedStringValue = await AsyncStorage.getItem(key);
      if (savedStringValue === null) return;
      const savedValue = JSON.parse(savedStringValue);
      if (savedValue.value !== value.value) {
        const stringValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, stringValue);
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
      const stringValue = await AsyncStorage.getItem(key);
      if (stringValue !== null) return JSON.parse(stringValue);
      return null;
    } catch (error) {
      console.error('Ошибка при получении настройки', error);
      return null;
    }
  },
  initSettings: async () => {
    const settingsObj: Record<TSettingsKeys, { name: string; value: string | null }> = {
      theme: defaultSettings.theme,
      user_group: defaultSettings.user_group,
      group_mode: defaultSettings.group_mode,
    };

    for (const key of Object.keys(defaultSettings) as TSettingsKeys[]) {
      const savedString = await AsyncStorage.getItem(key);
      if (savedString !== null) {
        settingsObj[key] = JSON.parse(savedString);
      } else {
        const defaultValueString = JSON.stringify(settingsObj[key]);
        await AsyncStorage.setItem(key, defaultValueString);
      }
    }

    set({ settings: settingsObj as TSettingValueMap });
  },
}));
