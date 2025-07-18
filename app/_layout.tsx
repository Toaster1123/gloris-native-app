import { LayoutWrapper } from '@/components';
import { getColors } from '@/constants';
import { useInternetConnecter, useSettingsStore } from '@/store';
import * as ScreenOrientation from 'expo-screen-orientation';
import React, { useEffect } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import Toast from 'react-native-toast-message';
import NetInfo from '@react-native-community/netinfo';

export default function RootLayout() {
  const COLORS = getColors();
  const { initSettings } = useSettingsStore();
  const { setIsConnected, isConnected } = useInternetConnecter((state) => state);
  React.useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
    });

    return () => unsubscribe();
  }, []);

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
        {/* <Text style={{ color: 'white' }}>
          <Text>{isConnected ? 'Online' : 'Offline'}</Text>
        </Text> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
