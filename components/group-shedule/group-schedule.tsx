import { TScheduleData } from '@/@types';
import { fetchScheduleData } from '@/lib';
import React from 'react';
import { Alert, FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import { GroupScheduleItem } from './components/group-schedule-item';

export const GroupSchedule = () => {
  const [scheduleData, setScheduleData] = React.useState<TScheduleData[]>();
  const [isLoading, setIsLoading] = React.useState(true);
  const fetchData = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await fetchScheduleData();
      setScheduleData(data);
    } catch (error) {
      const err: Error = error as Error;
      Alert.alert('Произошла ошибка', err.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isLoading) {
    return (
      <View>
        <Text>Загрузка...</Text>
      </View>
    );
  }
  return (
    <View style={style.mainBlock}>
      <FlatList
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchData} />}
        data={scheduleData}
        renderItem={({ item }) => (
          <GroupScheduleItem groupName={item.groupName} schedule={item.schedule} />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 24 }} />}
      />
    </View>
  );
};
const style = StyleSheet.create({
  mainBlock: {
    marginTop: 12,
  },
});
