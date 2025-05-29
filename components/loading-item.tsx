import { StyleSheet, Text, View } from 'react-native';

export const LoadingItem = () => {
  return (
    <View style={style.loadingBlock}>
      <Text>Загрузка...</Text>
    </View>
  );
};

const style = StyleSheet.create({
  loadingBlock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
