import { COLORS } from '@/constants';
import { useScheduleData } from '@/hooks';
import React from 'react';
import { FlatList, RefreshControl, SafeAreaView, StyleSheet, View } from 'react-native';
import { LoadingItem } from '../loading-item';
import { GroupScheduleItem } from './components';

export const GroupSchedule = () => {
  const { isLoading, scheduleData, refetch } = useScheduleData();
  if (isLoading) {
    return <LoadingItem />;
  }
  return (
    <SafeAreaView style={style.mainBlock}>
      <FlatList
        contentContainerStyle={{ paddingTop: 12 }}
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={refetch} />}
        data={scheduleData}
        renderItem={({ item }) => (
          <GroupScheduleItem
            groupId={item.groupId}
            groupName={item.groupName}
            schedule={item.schedule}
          />
        )}
        ListFooterComponent={() => <View style={{ height: 30 }} />}
        ItemSeparatorComponent={() => <View style={{ height: 24 }} />}
        keyExtractor={(item) => item.groupName}
      />
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  mainBlock: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});
