import { getColors } from '@/constants';
import { useScheduleData } from '@/hooks';
import React from 'react';
import { FlatList, RefreshControl, SafeAreaView, View } from 'react-native';
import { LoadingItem } from '../loading-item';
import { GroupScheduleItem } from './components';

export const GroupSchedule = () => {
  const COLORS = getColors();
  const { isLoading, scheduleData, refetch } = useScheduleData();
  console.log(scheduleData.length);
  if (isLoading || !scheduleData) {
    return (
      <View style={{ gap: 24, paddingTop: 12, backgroundColor: COLORS.background }}>
        <LoadingItem />
        <LoadingItem />
      </View>
    );
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <FlatList
        contentContainerStyle={{ paddingTop: 12 }}
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={refetch} />}
        data={scheduleData}
        renderItem={({ item }) => (
          <GroupScheduleItem
            groupId={item[0].id.toString()}
            groupName={item[0].title}
            schedule={item[1]}
          />
        )}
        ListFooterComponent={() => <View style={{ height: 30 }} />}
        ItemSeparatorComponent={() => <View style={{ height: 24 }} />}
        keyExtractor={(item) => item[0].id.toString()}
      />
    </SafeAreaView>
  );
};
