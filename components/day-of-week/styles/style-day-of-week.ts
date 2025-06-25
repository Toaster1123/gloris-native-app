import { TColors } from '@/@types';
import { StyleSheet } from 'react-native';

export const styleDayOfWeek = (COLORS: TColors) => {
  return StyleSheet.create({
    mainBlock: {
      paddingVertical: 16,
      backgroundColor: COLORS.background,
    },
    container: {
      flexDirection: 'row',
      gap: 8,
    },
    touchable: {
      flex: 1,
    },
  });
};
