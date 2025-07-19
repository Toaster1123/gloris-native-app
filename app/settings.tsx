import { SettingsSelector, SettingsVersion } from '@/components/settings-selector';
import { getColors } from '@/constants';
import { useHeaderTitleStore, useSettingsStore } from '@/store';
import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import { View } from 'react-native';

export default function SettingsPage() {
  useSettingsStore((state) => state.settings.theme);

  const COLORS = getColors();
  const setTitle = useHeaderTitleStore((state) => state.setTitle);
  useFocusEffect(
    useCallback(() => {
      setTitle('Настройки');
    }, []),
  );
  return (
    <View style={{ backgroundColor: COLORS.settungsBackground, flex: 1 }}>
      <SettingsSelector />
      <SettingsVersion />
    </View>
  );
}
