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
  const { scheduleData, isLoading, refetch, error } = useScheduleData(id);

  const setTitle = useHeaderTitleStore((state) => state.setTitle);
  useFocusEffect(
    useCallback(() => {
      const title =
        !isLoading && scheduleData.length > 0 && !error
          ? `Расписание группы ${scheduleData?.[0][0]?.title}`
          : undefined;
      setTitle(title);
    }, [scheduleData]),
  );
  const [groupInfo, schedule] = scheduleData?.[0] || [];
  return (
    <>
      <DayOfWeek />
      <DayOfWeekTitle />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, backgroundColor: COLORS.background }}
        contentContainerStyle={{ flexGrow: 1 }}
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={refetch} />}>
        {isLoading || error || scheduleData.length === 0 ? (
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
    </>
  );
}
