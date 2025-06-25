import { getColors } from '@/constants';
import { Feather as Icon } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Text, TouchableOpacity } from 'react-native';
import { styleSettingsButton } from '../styles';

export const SettingsButton = () => {
  const COLORS = getColors();
  const style = styleSettingsButton(COLORS);
  return (
    <Link style={style.container} href="/settings" asChild>
      <TouchableOpacity activeOpacity={0.7} style={style.settingsContainer}>
        <Icon style={{ height: 22 }} color={COLORS.textSecondary} size={20} name="settings" />
        <Text style={style.settingsText}>Настройки</Text>
      </TouchableOpacity>
    </Link>
  );
};
