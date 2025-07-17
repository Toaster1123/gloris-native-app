import { LayoutWrapper } from '@/components';
import { getColors } from '@/constants';
import { useSettingsStore } from '@/store';
import * as ScreenOrientation from 'expo-screen-orientation';
import React, { useEffect } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import Toast from 'react-native-toast-message';
import NetInfo from '@react-native-community/netinfo';

export default function RootLayout() {
  const COLORS = getColors();
  const { initSettings } = useSettingsStore();
  const checkInternetConnection = async () => {
    try {
      const state = await NetInfo.fetch();
      console.log('Интернет доступен:', state.isConnected);
      return state.isConnected;
    } catch (error) {
      console.error('Ошибка проверки подключения:', error);
      return false;
    }
  };
  checkInternetConnection();
  useEffect(() => {
    const lockOrientation = async () => {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    };

    lockOrientation();
    initSettings();

    return () => {
      const unlockOrientation = async () => {
        await ScreenOrientation.unlockAsync();
      };
      unlockOrientation();
    };
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
        <LayoutWrapper />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
