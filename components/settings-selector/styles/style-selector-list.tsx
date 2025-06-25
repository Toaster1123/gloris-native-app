import { TColors } from '@/@types';
import { StyleSheet } from 'react-native';
export const styleSelectorList = (COLORS: TColors) => {
  return StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      backgroundColor: COLORS.background,
      paddingVertical: 16,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      zIndex: 20,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    title: {
      fontSize: 18,
      fontWeight: '600',
      color: COLORS.textPrimary,
    },
  });
};
