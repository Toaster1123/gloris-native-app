import { TScheduleData } from '@/@types';
import { fetchScheduleData } from '@/lib';
import { useDayChoseStore, useInternetConnecter } from '@/store';
import React from 'react';

export const useScheduleData = (groupId?: string) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(true);
  const { isConnected } = useInternetConnecter((state) => state);

  const [scheduleData, setScheduleData] = React.useState<TScheduleData[]>([]);
  const { dayIndexChoise } = useDayChoseStore((state) => state);
  const fetchData = React.useCallback(async () => {
    setIsLoading(true);
    setError(false);
    setScheduleData([]);
    try {
      const { scheduleData, fetchError } = await fetchScheduleData({
        day: dayIndexChoise.toString(),
        group: groupId,
      });

      setScheduleData(scheduleData);

      setError(fetchError);
    } catch (errorMsg) {
      console.warn(errorMsg);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }, [dayIndexChoise, groupId]);

  React.useEffect(() => {
    if (isConnected) {
      fetchData();
    } else {
      setIsLoading(false);
    }
  }, [dayIndexChoise, isConnected]);

  return { scheduleData, isLoading, refetch: fetchData, error };
};
