import { Header, PopupOverlay } from '@/components';
import { getColors } from '@/constants';
import { useSettingsStore } from '@/store';
import { Feather } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';
import { Host } from 'react-native-portalize';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const COLORS = getColors();
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const { initSettings } = useSettingsStore();

  useEffect(() => {
    initSettings();
    async function loadFonts() {
      try {
        await Font.loadAsync({
          ...Feather.font,
        });
      } catch (e) {
        console.warn('Ошибка при загрузке шрифтов:', e);
      } finally {
        setFontsLoaded(true);
        SplashScreen.hideAsync();
      }
    }

    loadFonts();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
        <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
        <Host>
          <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
            <Header />
            <Slot />
            <PopupOverlay />
          </View>
        </Host>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
