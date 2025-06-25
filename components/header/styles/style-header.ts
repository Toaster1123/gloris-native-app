import { TColors } from '@/@types';
import { StyleSheet } from 'react-native';

export const createHeaderStyles = (COLORS: TColors) =>
  StyleSheet.create({
    mainContainer: {
      backgroundColor: COLORS.primary,
      flexDirection: 'row',
      alignItems: 'center',
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 20,
      paddingHorizontal: 16,
      flex: 1,
    },
    menuButton: {
      zIndex: 2,
    },
  });
