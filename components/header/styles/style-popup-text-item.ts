import { TColors } from '@/@types';
import { BORDERRADIUS } from '@/constants';
import { StyleSheet } from 'react-native';

export const stylePopupTextItem = (COLORS: TColors) => {
  return StyleSheet.create({
    mainContainer: {
      backgroundColor: COLORS.primary,
      borderRadius: BORDERRADIUS.main,
      padding: 8,
      justifyContent: 'center',
    },
    text: {
      color: COLORS.dateSelectedText,
      fontSize: 16,
      fontWeight: 400,
      marginBottom: 4,
    },
  });
};
