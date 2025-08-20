import { useSettingsStore } from '@/store';
import { Feather } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Host } from 'react-native-portalize';
import { Header } from '../header';
import { OfflineAlert } from '../offline-alert';
import { PopupOverlay } from '../popup-overlay';

export const LayoutWrapper = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const { isSettingLoaded } = useSettingsStore((state) => state);

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
      }
    }

    loadFonts();
  }, []);
  useEffect(() => {
    if (fontsLoaded && isSettingLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, isSettingLoaded]);

  return (
    <>
      <StatusBar style="light" />
      <Host>
        <View style={{ flex: 1 }}>
          <Header />
          <Slot />
          <PopupOverlay />
        </View>
      </Host>
      <OfflineAlert />
    </>
  );
};
