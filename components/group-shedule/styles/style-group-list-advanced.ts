import { TColors } from '@/@types';
import { StyleSheet } from 'react-native';

export const styleGroupListAdvanced = (COLORS: TColors) => {
  return StyleSheet.create({
    scheduleItemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 10,
    },
    scheduleItemContainerText: {
      color: COLORS.groupText,
      fontSize: 16,
    },
    cabContainter: {
      gap: 8,
    },
  });
};
