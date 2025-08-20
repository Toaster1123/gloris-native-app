// import { getColors } from '@/constants';
import { useScheduleData } from '@/hooks';
import React from 'react';
import { FlatList, RefreshControl, View } from 'react-native';
import { LoadingItem } from '../loading-group/loading-item';
import { GroupScheduleItem } from './components';

export const GroupSchedule = () => {
  // const COLORS = getColors();

  const { isLoading, scheduleData, refetch, error } = useScheduleData();
  return (
    // <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
    <FlatList
      contentContainerStyle={{ paddingTop: 12 }}
      refreshControl={
        <RefreshControl
          style={{ position: 'absolute', top: 100 }}
          refreshing={isLoading}
          onRefresh={refetch}
        />
      }
      data={scheduleData}
      renderItem={({ item }) => (
        <GroupScheduleItem
          groupId={item[0].id.toString()}
          groupName={item[0].title}
          schedule={item[1]}
        />
      )}
      ListEmptyComponent={() => (
        <View style={{ gap: 24 }}>
          <LoadingItem />
          <LoadingItem />
        </View>
      )}
      ListFooterComponent={() => <View style={{ height: 30 }} />}
      ItemSeparatorComponent={() => <View style={{ height: 24 }} />}
      keyExtractor={(item) => item[0].id.toString()}
      scrollEnabled={!!(scheduleData && scheduleData.length > 0 && !error)}
    />
    // </SafeAreaView>
  );
};
