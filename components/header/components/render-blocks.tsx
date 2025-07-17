import { BORDERRADIUS, getColors } from '@/constants';
import { useScheduleData } from '@/hooks';
import { sortScheduleByYear } from '@/lib';
import { useSettingsStore } from '@/store';
import { StyleSheet, View } from 'react-native';
import { LoadingPlaceholder } from './loading-placeholder';
import { PopupGroupList } from './popup-group-list';
import { PopupTextItem } from './popup-text-item';

interface Props {
  showAlert: () => void;
}
export const RenderBlocks: React.FC<Props> = ({ showAlert }) => {
  const groupId = useSettingsStore((state) => state.settings.user_group.value);
  const { isLoading, scheduleData } = useScheduleData();
  const groupedSchedule = sortScheduleByYear(scheduleData);
  const COLORS = getColors();
  const style = StyleSheet.create({
    selectorContainer: {
      marginBottom: 12,
      gap: 6,
      padding: 8,
    },
    yearBlock: {
      gap: 6,
    },
  });
  return (
    <View style={style.selectorContainer}>
      <PopupTextItem href="/" text="Все группы" />
      <PopupTextItem
        onPress={!groupId ? showAlert : undefined}
        href={groupId ? `group/${groupId}` : undefined}
        text="Твое расписание"
      />
      <View style={style.yearBlock}>
        {isLoading || groupedSchedule.length === 0
          ? Array(4)
              .fill(0)
              .map((_, id) => (
                <LoadingPlaceholder
                  propStyles={{
                    backgroundColor: COLORS.primary,
                    borderRadius: BORDERRADIUS.main,
                  }}
                  key={id}
                />
              ))
          : groupedSchedule.map((item, id) => (
              <PopupGroupList key={id} year={item.year} groups={item.groups} />
            ))}
      </View>
    </View>
  );
};
