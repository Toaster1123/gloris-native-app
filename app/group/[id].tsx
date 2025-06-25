import { DayOfWeek, DayOfWeekTitle, GroupScheduleItem, LoadingItem } from '@/components';
import { getColors } from '@/constants';
import { useScheduleData } from '@/hooks';
import { useHeaderTitleStore } from '@/store';
import { useFocusEffect, useLocalSearchParams } from 'expo-router';
import { useCallback } from 'react';
import { View } from 'react-native';

export default function GroupPage() {
  const COLORS = getColors();
  const { id }: { id: string } = useLocalSearchParams();
  const { scheduleData, isLoading } = useScheduleData(id);

  const setTitle = useHeaderTitleStore((state) => state.setTitle);
  useFocusEffect(
    useCallback(() => {
      const title =
        scheduleData && scheduleData.length > 0
          ? `Расписание группы ${scheduleData?.[0][0]?.title}`
          : undefined;
      setTitle(title);
    }, [scheduleData]),
  );
  if (isLoading || !scheduleData || scheduleData.length === 0) {
    return <LoadingItem />;
  }
  const [groupInfo, schedule] = scheduleData[0];
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.background }}>
      <DayOfWeek />
      <DayOfWeekTitle />
      <GroupScheduleItem
        isGroupPage
        groupName={groupInfo.title}
        schedule={schedule}
        groupId={groupInfo.id.toString()}
      />
    </View>
  );
}
