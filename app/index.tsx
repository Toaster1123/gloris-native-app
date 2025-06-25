import { DayOfWeek, DayOfWeekTitle, GroupSchedule } from '@/components';
import { useHeaderTitleStore } from '@/store';
import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import { View } from 'react-native';

export default function Index() {
  const { setTitle } = useHeaderTitleStore((state) => state);

  useFocusEffect(
    useCallback(() => {
      setTitle('Расписание по группам');
    }, []),
  );

  return (
    <View style={{ flex: 1 }}>
      <DayOfWeek />
      <DayOfWeekTitle />
      <GroupSchedule />
    </View>
  );
}
