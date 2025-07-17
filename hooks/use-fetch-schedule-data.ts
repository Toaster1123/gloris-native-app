import { TScheduleData } from '@/@types';
import { fetchScheduleData } from '@/lib';
import { useDayChoseStore } from '@/store';
import React from 'react';

export const useScheduleData = (groupId?: string) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  const [scheduleData, setScheduleData] = React.useState<TScheduleData[]>([]);
  const { dayIndexChoise } = useDayChoseStore((state) => state);
  const fetchData = React.useCallback(async () => {
    setIsLoading(true);
    setError(false);
    setScheduleData([]);
    try {
      const { scheduleData, error } = await fetchScheduleData({
        day: dayIndexChoise.toString(),
        group: groupId,
      });
      setScheduleData(scheduleData);
      setError(error);
    } catch (errorMsg) {
      console.warn(errorMsg);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [dayIndexChoise, groupId]);

  React.useEffect(() => {
    fetchData();
  }, [dayIndexChoise]);

  return { scheduleData, isLoading, refetch: fetchData, error };
};
