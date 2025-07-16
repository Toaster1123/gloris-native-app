import { TColors } from '@/@types';
import { StyleSheet } from 'react-native';

export const styleAlertUserGroup = (COLORS: TColors) => {
  return StyleSheet.create({
    overlay: {
      zIndex: 12,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.7)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    popup: {
      backgroundColor: COLORS.background,
      padding: 20,
      borderRadius: 12,
      width: '80%',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom: 8,
      color: COLORS.textPrimary,
    },
    message: {
      fontSize: 14,
      marginBottom: 20,
      color: COLORS.textPrimary,
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      gap: 16,
    },
    button: {
      fontSize: 16,
      color: '#888',
    },
    primary: {
      color: '#007bff',
      fontWeight: 'bold',
    },
  });
};
