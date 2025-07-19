import { getColors } from '@/constants';
import { StyleSheet, View } from 'react-native';
import { Container } from '../container';

export const LoadingItem = () => {
  const COLORS = getColors();

  const style = StyleSheet.create({
    header: {
      backgroundColor: COLORS.loadingHeader,
      height: 48,
      justifyContent: 'center',
      alignItems: 'center',
    },
    schedule: {
      backgroundColor: COLORS.loadingSchedule,
      width: '100%',
      height: 44.75,
      justifyContent: 'center',
      alignItems: 'center',
    },
    scheduleTitle: {
      backgroundColor: COLORS.loadingText,
      width: '75%',
      height: 21,
      borderRadius: 8,
    },
    headerTitle: {
      backgroundColor: COLORS.loadingText,
      width: 96,
      height: 24,
      borderRadius: 10,
    },
  });
  return (
    <View>
      <Container>
        <View style={style.header}>
          <View style={style.headerTitle} />
        </View>
        {Array(9)
          .fill(null)
          .map((_, id) => (
            <View style={style.schedule} key={id}>
              <View style={style.scheduleTitle} />
            </View>
          ))}
      </Container>
    </View>
  );
};
