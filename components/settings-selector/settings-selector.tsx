import { TParams } from '@/@types';
import { getColors, settingsParams } from '@/constants';
import { useScheduleData } from '@/hooks';
import { popupOverlayStore, useSettingsStore } from '@/store';
import { useEffect, useState } from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Portal } from 'react-native-portalize';
import { Container } from '../container';
import { SelectorList, SettingTitleBlock } from './components';

export const SettingsSelector: React.FC = () => {
  const { scheduleData, isLoading } = useScheduleData();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<TParams | null>(null);
  const { isActiveOverlay, closeOverlay, openOverlay } = popupOverlayStore((state) => state);
  const { settings } = useSettingsStore();
  scheduleData.forEach((item) =>
    settingsParams[2].options.push({ name: item[0].title, value: item[0].id.toString() }),
  );

  const handlePress = (id: number) => {
    openOverlay();
    setIsPopupOpen(true);
    setSelectedOption(settingsParams[id]);
  };
  const handleClose = () => {
    closeOverlay();
    setIsPopupOpen(false);
  };
  useEffect(() => {
    if (!isActiveOverlay) {
      setIsPopupOpen(false);
    }
  }, [isActiveOverlay]);
  const COLORS = getColors();
  return (
    <View style={style.container}>
      <View style={style.settingsContainer}>
        <View style={style.selectorContainer}>
          {settingsParams.map(({ title, storeKey }, id) => (
            <SettingTitleBlock
              isLoading={storeKey === 'user_group' && isLoading}
              onPress={() => handlePress(id)}
              title={title}
              selectedOption={settings[storeKey]}
              key={`${id}-${title}`}
            />
          ))}
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://xn----3-iddzneycrmpn.xn--p1ai/lesson_table_show/')
            }
            activeOpacity={0.7}>
            <Container
              propStyles={{
                backgroundColor: COLORS.settingsContainer,
                paddingVertical: 14,
                gap: 4,
              }}>
              <Text style={{ color: COLORS.textPrimary, fontSize: 16 }}>Веб-версия</Text>
            </Container>
          </TouchableOpacity>
        </View>
      </View>
      <Portal>
        <SelectorList
          selectedOptions={selectedOption ? selectedOption : null}
          onClose={handleClose}
          isOpen={isPopupOpen}
        />
      </Portal>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  selectorContainer: {
    gap: 3,
  },
  settingsContainer: {
    justifyContent: 'space-between',
    flex: 1,
  },
});
