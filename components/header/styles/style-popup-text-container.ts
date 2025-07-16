import { TColors } from '@/@types';
import { StyleSheet } from 'react-native';
export const stylePopupTextContainer = (COLORS: TColors) => {
  return StyleSheet.create({
    container: {
      zIndex: 11,
      position: 'absolute',
      backgroundColor: COLORS.background,
      height: '100%',
    },
    mainTextContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    scrollContentContainer: {
      flexGrow: 1,
      justifyContent: 'space-between',
    },
  });
};
