import { TColors } from '@/@types';
import { StyleSheet } from 'react-native';
export const styleSelectorListItem = (COLORS: TColors) => {
  return StyleSheet.create({
    title: {
      color: COLORS.textPrimary,
      fontSize: 16,
    },
    radioButton: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      borderWidth: 1,
      borderColor: COLORS.settingsSelected,
      alignItems: 'center',
      justifyContent: 'center',
    },
    radioInner: {
      width: 12,
      height: 12,
      borderRadius: '50%',
      backgroundColor: COLORS.settingsSelected,
    },
  });
};
