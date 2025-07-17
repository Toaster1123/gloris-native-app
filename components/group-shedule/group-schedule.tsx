import { getColors } from '@/constants';
import { useScheduleData } from '@/hooks';
import React from 'react';
import { FlatList, RefreshControl, View } from 'react-native';
import { LoadingItem } from '../loading-item';
import { GroupScheduleItem } from './components';

export const GroupSchedule = () => {
  const COLORS = getColors();
  const { isLoading, scheduleData, refetch } = useScheduleData();
  // if (isLoading || !scheduleData) {
  //   return (
  //     <SafeAreaView
  //       style={{ flex: 1, gap: 24, paddingTop: 12, backgroundColor: COLORS.background }}>
  //       <LoadingItem />
  //       <LoadingItem />
  //     </SafeAreaView>
  //   );
  // }
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.background }}>
      {isLoading || !scheduleData ? (
        <View style={{ gap: 24, paddingTop: 12 }}>
          <LoadingItem />
          <LoadingItem />
        </View>
      ) : (
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
      )}
    </View>
  );
};
