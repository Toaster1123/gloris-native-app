import { Feather as Icon } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

export const CustomAlert = (props: any) => {
  const { text1 } = props;
  return (
    <View style={styles.container}>
      <Icon color={'white'} name="globe" size={20} />
      <Text style={styles.text}>{text1}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f11d1d',
    borderRadius: 14,
    flexDirection: 'row',
    gap: 8,
    bottom: 14,
    position: 'absolute',
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    alignSelf: 'center',
    zIndex: 1999,
  },

  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
