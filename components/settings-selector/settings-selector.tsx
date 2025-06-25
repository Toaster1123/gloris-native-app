import { TSettingsKeys } from '@/@types';
import { getColors } from '@/constants';
import { useScheduleData } from '@/hooks';
import { popupOverlayStore, useSettingsStore } from '@/store';
import { useEffect, useState } from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Portal } from 'react-native-portalize';
import { Container } from '../container';
import { SelectorList, SettingsVersion, SettingTitleBlock } from './components';

type TParams = {
  storeKey: TSettingsKeys;
  title: string;
  options: string[];
};

export const SettingsSelector: React.FC = () => {
  const { scheduleData, isLoading } = useScheduleData();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<TParams | null>(null);
  const { isActiveOverlay, closeOverlay, openOverlay } = popupOverlayStore((state) => state);
  const { settings } = useSettingsStore();

  const params: TParams[] = [
    {
      storeKey: 'theme',
      title: 'Цветовая тема',
      options: ['Обычная', 'Темная'],
    },
    {
      storeKey: 'group_mode',
      title: 'Вид группы',
      options: ['Обычный', 'Расширенный'],
    },
    {
      storeKey: 'user_group',
      title: 'Твоя группа',
      options: ['Не выбранно'],
    },
  ];
  scheduleData.forEach((item) => params[2].options.push(item[0].title));

  const handlePress = (id: number) => {
    openOverlay();
    setIsPopupOpen(true);
    setSelectedOption(params[id]);
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
          {params.map(({ title, storeKey }, id) => (
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
        <SettingsVersion />
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
