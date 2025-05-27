import { DayOfWeek, DayOfWeekTitle, GroupSchedule } from '@/components';
import { View } from 'react-native';

export default function Index() {
  return (
    <View>
      <DayOfWeek />
      <DayOfWeekTitle />
      <GroupSchedule />
    </View>
  );
}
