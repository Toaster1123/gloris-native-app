import { Feather } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { Host } from 'react-native-portalize';
import { Header } from '../header';
import { OfflineAlert } from '../offline-alert';
import { PopupOverlay } from '../popup-overlay';

export const LayoutWrapper = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
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
    <>
      <StatusBar style="light" />
      <Host>
        <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
          <Header />
          <Slot />
          <PopupOverlay />
        </View>
      </Host>
      <OfflineAlert />
    </>
  );
};
