import { getColors } from '@/constants';
import { Link } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
  onClose: () => void;
}

export const AlertUserGroup: React.FC<Props> = ({ onClose }) => {
  const COLORS = getColors();

  return (
    <View style={styles.overlay}>
      <View style={styles.popup}>
        <Text style={styles.title}>Группа не выбрана</Text>
        <Text style={styles.message}>
          Вы еще не выбрали вашу группу. Вы можете её сейчас поменять в настройках или сделать это
          позже.
        </Text>
        <View style={styles.buttons}>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.button}>Позже</Text>
          </TouchableOpacity>
          <Link href="/settings" asChild>
            <TouchableOpacity onPress={onClose}>
              <Text style={[styles.button, styles.primary]}>В настройки</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    zIndex: 12,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    width: '80%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
  },
  message: {
    fontSize: 14,
    marginBottom: 20,
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
