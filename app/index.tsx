import { DayOfWeek, DayOfWeekTitle, GroupSchedule } from '@/components';
import { useHeaderTitleStore, useSettingsStore } from '@/store';
import { useFocusEffect, useRouter } from 'expo-router';
import { useCallback } from 'react';
import { View } from 'react-native';

export default function Index() {
  const { setTitle } = useHeaderTitleStore((state) => state);
  const { settings } = useSettingsStore((state) => state);
  const router = useRouter();

  useFocusEffect(
    useCallback(() => {
      setTitle('Расписание по группам');
      const redirect = async () => {
        const id = settings.user_group.value;
        try {
          if (id !== null && !router.canGoBack()) {
            router.replace(`/group/${id}`);
          }
        } catch (error) {
          console.error('Ошибка при проверке настройки:', error);
        }
      };
      redirect();
    }, []),
  );

  return (
    <View style={{ flex: 1 }}>
      <DayOfWeek />
      <DayOfWeekTitle />
      <GroupSchedule />
    </View>
  );
}
