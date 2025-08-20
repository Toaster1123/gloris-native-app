import { DayOfWeek, DayOfWeekTitle, GroupSchedule } from '@/components';
import { useHeaderTitleStore, useSettingsStore } from '@/store';
import { useFocusEffect, useRouter } from 'expo-router';
import { useCallback, useEffect } from 'react';
import { View } from 'react-native';

export default function Index() {
  const { setTitle } = useHeaderTitleStore((state) => state);
  const { settings, getSetting, isSettingLoaded } = useSettingsStore((state) => state);
  const router = useRouter();
  useEffect(() => {
    if (isSettingLoaded) {
      (async () => {
        try {
          const id = settings.user_group.value;
          if (id !== null && !router.canGoBack()) {
            router.replace(`/group/${id}`);
          }
        } catch (error) {
          console.error('Ошибка при проверке настройки:', error);
        } finally {
        }
      })();
    }
  }, [isSettingLoaded, settings, router, getSetting]);

  useFocusEffect(
    useCallback(() => {
      setTitle('Расписание по группам');
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
