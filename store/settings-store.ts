import { TSettingsKeys, TSettingValueMap } from '@/@types';
import { defaultSettings } from '@/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';

type TSettingsStore = {
  settings: TSettingValueMap;
  isSettingLoaded: boolean;
  saveSetting: (key: TSettingsKeys, value: { name: string; value: string | null }) => Promise<void>;
  getSetting: (key: TSettingsKeys) => Promise<{ name: string; value: string | null } | null>;
  initSettings: () => Promise<void>;
};

export const useSettingsStore = create<TSettingsStore>((set) => ({
  settings: defaultSettings,
  isSettingLoaded: false,
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
    const settingsObj: TSettingValueMap = {
      group_mode: defaultSettings.group_mode,
      theme: defaultSettings.theme,
      user_group: defaultSettings.user_group,
    };

    for (const key of Object.keys(defaultSettings) as TSettingsKeys[]) {
      const savedValue = await AsyncStorage.getItem(key);

      if (savedValue !== null) {
        try {
          const parsed = JSON.parse(savedValue);
          settingsObj[key] = parsed;
        } catch (error) {
          console.warn(`Ошибка парсинга настройки ${key}:`, error);
          settingsObj[key] = defaultSettings[key];
        }
      } else {
        await AsyncStorage.setItem(key, JSON.stringify(settingsObj[key]));
      }
    }

    set({ settings: settingsObj, isSettingLoaded: true });
  },
}));
