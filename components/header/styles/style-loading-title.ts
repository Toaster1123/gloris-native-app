import { TColors } from '@/@types';
import { StyleSheet } from 'react-native';
export const styleLoadingTitle = (COLORS: TColors) => {
  return StyleSheet.create({
    titleContsainer: {
      position: 'absolute',
      alignContent: 'center',
      alignItems: 'center',
      left: 0,
      right: 0,
      zIndex: 1,
    },
    title: {
      color: COLORS.textSecondary,
      textAlign: 'center',
      fontSize: 19,
    },
    loadingTitle: {
      backgroundColor: COLORS.textSecondary,
      textAlign: 'center',
      width: 240,
      height: 24,
      borderRadius: 8,
    },
  });
};
