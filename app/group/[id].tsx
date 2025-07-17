import {
  DayOfWeek,
  DayOfWeekTitle,
  GroupPageInfo,
  GroupScheduleItem,
  LoadingGroupInfo,
  LoadingItem,
} from '@/components';
import { getColors } from '@/constants';
import { useScheduleData } from '@/hooks';
import { useHeaderTitleStore } from '@/store';
import { useFocusEffect, useLocalSearchParams } from 'expo-router';
import { useCallback } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';

export default function GroupPage() {
  const COLORS = getColors();
  const params = useLocalSearchParams();
  const id = params?.id as string | undefined;
  const { scheduleData, isLoading, refetch } = useScheduleData(id);

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
  const [groupInfo, schedule] = scheduleData?.[0] || [];
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, backgroundColor: COLORS.background }}
      contentContainerStyle={{ flexGrow: 1 }}
      refreshControl={<RefreshControl refreshing={isLoading} onRefresh={refetch} />}>
      <DayOfWeek />
      <DayOfWeekTitle />
      {isLoading || !scheduleData || !id ? (
        <View style={{ marginTop: 12 }}>
          <LoadingItem />
          <LoadingGroupInfo />
        </View>
      ) : (
        <>
          <GroupScheduleItem
            isGroupPage
            groupName={groupInfo.title}
            schedule={schedule}
            groupId={groupInfo.id.toString()}
          />
          <GroupPageInfo
            course={groupInfo.course}
            curator={groupInfo.curator}
            speciality={groupInfo.speciality}
          />
        </>
      )}
    </ScrollView>
  );
}
