import { LayoutWrapper } from '@/components';
import { getColors } from '@/constants';
import { useInternetConnecter, useSettingsStore } from '@/store';
import NetInfo from '@react-native-community/netinfo';
import * as ScreenOrientation from 'expo-screen-orientation';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const COLORS = getColors();
  const { initSettings } = useSettingsStore();
  const { setIsConnected } = useInternetConnecter((state) => state);
  useEffect(() => {
    const lockOrientation = async () => {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    };
    lockOrientation();
    initSettings();
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });
    return () => {
      const unlockOrientation = async () => {
        await ScreenOrientation.unlockAsync();
      };
      unsubscribe();
      unlockOrientation();
    };
  }, [initSettings, setIsConnected]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
        <View style={{ flex: 1, backgroundColor: COLORS.background }}>
          <LayoutWrapper />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
