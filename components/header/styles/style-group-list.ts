import { TColors } from '@/@types';
import { BORDERRADIUS } from '@/constants';
import { StyleSheet } from 'react-native';
export const styleGropList = (COLORS: TColors) => {
  return StyleSheet.create({
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: COLORS.primary,
      borderRadius: BORDERRADIUS.main,
      color: COLORS.dateSelectedText,
    },
    title: {
      color: COLORS.dateSelectedText,
      padding: 8,
      marginBottom: 4,
      fontSize: 16,
    },
    groupContainer: {
      paddingVertical: 4,
      overflow: 'hidden',
    },
    groupText: {
      paddingHorizontal: 8,
      color: COLORS.textPrimary,
      paddingVertical: 2,
      fontSize: 16,
    },

    loadingPlaceholderIcon: {
      width: 24,
      height: 24,
    },
  });
};
