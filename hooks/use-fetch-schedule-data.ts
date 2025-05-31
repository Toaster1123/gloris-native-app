import { TScheduleData } from '@/@types';
import { fetchScheduleData, splitGroupName } from '@/lib';
import { useDayChoseStore } from '@/store';
import React from 'react';
import { Alert } from 'react-native';

export const useScheduleData = (groupId?: string) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [scheduleData, setScheduleData] = React.useState<TScheduleData[]>([]);
  const { dayIndexChoise, isInitialized } = useDayChoseStore((state) => state);

  const fetchData = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await fetchScheduleData({
        day: dayIndexChoise.toString(),
        group: groupId,
      });
      const sortedData = data.sort(
        (a, b) =>
          Number(splitGroupName(a.groupName).groupCode) -
          Number(splitGroupName(b.groupName).groupCode),
      );
      setScheduleData(sortedData);
    } catch (error) {
      const err: Error = error as Error;
      Alert.alert('Произошла ошибка', err.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [dayIndexChoise, groupId]);

  React.useEffect(() => {
    if (isInitialized) fetchData();
  }, [isInitialized, dayIndexChoise]);

  return { scheduleData, isLoading, refetch: fetchData };
};
