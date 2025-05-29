import { DayOfWeek, DayOfWeekTitle, GroupSchedule } from '@/components';
import { View } from 'react-native';

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <DayOfWeek />
      <DayOfWeekTitle />
      <GroupSchedule />
    </View>
  );
}
