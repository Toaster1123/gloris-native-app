import { COLORS } from '@/constants';
import { StyleSheet } from 'react-native';

export const styleGropList = StyleSheet.create({
  mainContainer: {
    overflow: 'hidden',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    color: COLORS.dateSelectedText,
  },
  title: {
    color: COLORS.dateSelectedText,
    paddingVertical: 6,
    paddingHorizontal: 8,
    fontSize: 16,
  },
  groupContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    overflow: 'hidden',
  },
  groupText: {
    color: COLORS.textPrimary,
    paddingVertical: 2,
  },
  loadingPlaceholder: {
    height: 40,
    marginVertical: 4,
    borderRadius: 8,
    backgroundColor: '#e0e0e0',
  },
});
