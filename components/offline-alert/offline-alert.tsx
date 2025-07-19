import { useInternetConnecter } from '@/store';
import React from 'react';
import Toast from 'react-native-toast-message';
import { CustomAlert } from './custom-alert';

export const OfflineAlert = () => {
  const { isConnected } = useInternetConnecter((state) => state);
  React.useEffect(() => {
    if (!isConnected) {
      Toast.show({
        type: 'CustomAlert',
        text1: 'Нет интернета',
        position: 'bottom',
        autoHide: false,
      });
    } else {
      Toast.hide();
    }
  }, [isConnected]);
  return (
    <Toast
      config={{
        CustomAlert,
      }}
    />
  );
};
