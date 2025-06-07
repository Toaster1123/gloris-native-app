import { COLORS } from '@/constants';
import { StyleSheet } from 'react-native';

export const styleHeader = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
    flex: 1,
  },
  titleContsainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 1,
  },
  title: {
    color: COLORS.textSecondary,
    textAlign: 'center',
    fontSize: 18,
  },
  menuButton: {
    zIndex: 2,
  },
});
