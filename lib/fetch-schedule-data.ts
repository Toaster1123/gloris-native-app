import { TScheduleData } from '@/@types';
import { Alert } from 'react-native';
import { DOMParser } from 'react-native-html-parser';

export const fetchScheduleData = async ({ group, day }: { group?: string; day?: string }) => {
  const queryParams = new URLSearchParams();
  if (group) queryParams.append('group_id', group);
  if (day) queryParams.append('day', day);
  const url = 'https://xn----3-iddzneycrmpn.xn--p1ai/lesson_table_show';
  const fetchUrl = queryParams.toString() ? `${url}?${queryParams.toString()}` : url;
  try {
    const res = await fetch(fetchUrl);
    const html = await res.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    const boxGroups = doc.getElementsByClassName('box-group');
    const scheduleData: TScheduleData[] = [];

    for (let i = 0; i < boxGroups.length; i++) {
      const box = boxGroups[i];
      const groupNameElement = box.getElementsByClassName('btn-group')[0];
      const groupName = groupNameElement?.textContent?.trim() || 'Неизвестная группа';
      const href = groupNameElement?.getAttribute('href') || '';
      const urlParams = new URLSearchParams(href);
      const groupId = urlParams.get('group_id') || 'unknown';

      const lessonNodes = box.getElementsByTagName('p');
      const lessons: string[] = [];
      for (let j = 0; j < lessonNodes.length; j++) {
        const text = lessonNodes[j].textContent?.trim();
        if (text) lessons.push(text);
      }

      scheduleData.push({ groupName, schedule: lessons, groupId });
    }

    return scheduleData;
  } catch (error) {
    const err: Error = error as Error;
    Alert.alert('Произошла ошибка', err.message);
    console.error(error);
    return [];
  }
};
