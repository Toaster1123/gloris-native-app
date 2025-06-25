import {
  TFetchGroupSchedule,
  TFetchScheduleData,
  TGroupInfo,
  TGroupSchedule,
  TScheduleData,
  TScheduleKeys,
} from '@/@types';
import Constants from 'expo-constants';
import { Alert } from 'react-native';

const { SCHEDULE_URL, URL_KEY } = Constants.expoConfig?.extra || {};

export const fetchScheduleData = async ({ group, day }: { group?: string; day?: string }) => {
  const queryParams = new URLSearchParams();
  if (group) queryParams.append('group_id', group);
  if (day) queryParams.append('day', day);
  const url = `${SCHEDULE_URL}`;
  const urlKey = `${URL_KEY}`;
  const fetchUrl = queryParams.toString()
    ? `${url}/?${queryParams.toString()}&${urlKey}`
    : `${url}/?${urlKey}`;
  try {
    const res = await fetch(fetchUrl);
    const data: TFetchScheduleData[] = await res.json();
    const scheduleData: TScheduleData[] = data.map((item) => {
      const groupObject = Object.values(item)[0] as [TGroupInfo, TFetchGroupSchedule];
      const [groupInfo, scheduleObj] = groupObject;
      const scheduleKeys = Object.keys(scheduleObj) as TScheduleKeys[];
      const scheduleArray: TGroupSchedule = scheduleKeys.map((key) => scheduleObj[key]);
      return [groupInfo, scheduleArray];
    });
    return scheduleData;
  } catch (error) {
    const err: Error = error as Error;
    Alert.alert('Произошла ошибка', err.message);
    console.error(error);
    return [];
  }
};
