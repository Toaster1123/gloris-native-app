import { getColors } from '@/constants';
import { Link } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import { styleAlertUserGroup } from './alert-user-group/style-alert-user-group';

interface Props {
  onClose: () => void;
}

export const AlertUserGroup: React.FC<Props> = ({ onClose }) => {
  const COLORS = getColors();
  const styles = styleAlertUserGroup(COLORS);
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
