import { Container } from '@/components/container';
import { getColors } from '@/constants';
import { Linking, StyleSheet, Text, TouchableOpacity } from 'react-native';

export const SettingsVersion = () => {
  const COLORS = getColors();

  const style = StyleSheet.create({
    versionContainer: {
      flexDirection: 'row',
      gap: 4,
      justifyContent: 'center',
      paddingVertical: 8,
    },
    versionText: {
      fontSize: 16,
      color: COLORS.textPrimary,
    },
  });
  return (
    <TouchableOpacity
      onPress={() => Linking.openURL('https://github.com/Toaster1123')}
      activeOpacity={0.7}>
      <Container propStyles={style.versionContainer}>
        <Text style={style.versionText}>Github</Text>
        <Text style={style.versionText}>1.0.0</Text>
      </Container>
    </TouchableOpacity>
  );
};
