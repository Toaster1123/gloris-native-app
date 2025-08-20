import { TColors } from '@/@types';
import { StyleSheet } from 'react-native';
export const styleSettingsButton = (COLORS: TColors) => {
  return StyleSheet.create({
    container: {
      // width: '100%',
      borderColor: 'red',
      borderWidth: 1,
    },
    settingsContainer: {
      // width: '100%',
      flexDirection: 'row',
      borderColor: 'green',
      borderWidth: 1,
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
