import { TColors } from '@/@types';
import { StyleSheet } from 'react-native';

export const styleGroupListDafault = (COLORS: TColors) => {
  return StyleSheet.create({
    scheduleItemContainer: {
      paddingVertical: 8,
      alignItems: 'center',
    },
    scheduleItemContainerText: {
      color: COLORS.groupText,
      fontSize: 16,
      alignItems: 'center',
      fontWeight: 400,
      paddingVertical: 4,
    },
  });
};
