import { DayOfWeek, DayOfWeekTitle, GroupScheduleItem, LoadingItem } from '@/components';
import { useScheduleData } from '@/hooks';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

export default function GroupPage() {
  const { id }: { id: string } = useLocalSearchParams();
  const isLoading = useScheduleData(id).isLoading;
  const scheduleData = useScheduleData(id).scheduleData[0];

  if (isLoading || !scheduleData) {
    return <LoadingItem />;
  }

  return (
    <View style={{ flex: 1 }}>
      <DayOfWeek />
      <DayOfWeekTitle />
      <GroupScheduleItem
        isGroupPage
        groupName={scheduleData.groupName}
        schedule={scheduleData.schedule}
        groupId={scheduleData.groupId}
      />
    </View>
  );
}
