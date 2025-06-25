import { TColors } from '@/@types';
import { StyleSheet } from 'react-native';
export const styleSettingsButton = (COLORS: TColors) => {
  return StyleSheet.create({
    container: {
      width: '100%',
    },
    settingsContainer: {
      width: '100%',
      flexDirection: 'row',
      gap: 12,
      paddingVertical: 12,
      paddingHorizontal: 8,
      backgroundColor: COLORS.primary,
    },
    settingsText: {
      fontSize: 17,
      textAlign: 'center',
      color: COLORS.textSecondary,
    },
  });
};
