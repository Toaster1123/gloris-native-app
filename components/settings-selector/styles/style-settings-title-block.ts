import { TColors } from '@/@types';
import { StyleSheet } from 'react-native';

export const styleSettingsTitleBlock = (COLORS: TColors) => {
  return StyleSheet.create({
    container: {
      backgroundColor: COLORS.settingsContainer,
      paddingVertical: 8,
      gap: 4,
    },
    title: {
      color: COLORS.textPrimary,
      fontSize: 16,
    },
    selectedText: {
      color: COLORS.settingsSelected,
    },
  });
};
