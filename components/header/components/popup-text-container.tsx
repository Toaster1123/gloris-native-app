import { TListGroupName } from '@/@types';
import { COLORS } from '@/constants';
import { useScheduleData } from '@/hooks';
import { splitGroupName } from '@/lib';
import { Feather as Icon } from '@expo/vector-icons';
import { Animated, Dimensions, StyleSheet, Text, View } from 'react-native';
import { PopupGroupList } from './popup-group-list';
import { PopupTextItem } from './popup-text-item';

interface Props {
  slideAnim: Animated.Value;
}

const { width } = Dimensions.get('window');
const animateWidth = width / 2;
export const PopupTextContainer: React.FC<Props> = ({ slideAnim }) => {
  const { isLoading, scheduleData } = useScheduleData();

  const groupedScheduleByYear: TListGroupName[] = [];

  scheduleData.forEach((group) => {
    const currentYear = splitGroupName(group.groupName).groupCode[0];
    const existingYear = groupedScheduleByYear.find((item) => item.year === currentYear);

    if (existingYear) {
      existingYear.groups.push({ groupId: group.groupId, groupName: group.groupName });
    } else {
      groupedScheduleByYear.push({
        year: currentYear,
        groups: [{ groupId: group.groupId, groupName: group.groupName }],
      });
    }
  });
  return (
    <Animated.View
      style={[
        style.container,
        {
          transform: [{ translateX: slideAnim }],
        },
      ]}>
      <View style={style.selectorContainer}>
        <PopupTextItem text="Все группы" />
        <PopupTextItem text="Твое расписание" />
        <View style={style.yearBlock}>
          {groupedScheduleByYear.map((item, id) => (
            <PopupGroupList key={id} isLoading={isLoading} year={item.year} groups={item.groups} />
          ))}
        </View>
        <View>
          <PopupTextItem text="Совмещенные пары" />
        </View>
      </View>
      <View style={style.settingsContainer}>
        <Text style={style.settingsText}>Настройки</Text>
        <Icon color={COLORS.textSecondary} size={22} name="settings" />
      </View>
    </Animated.View>
  );
};

const style = StyleSheet.create({
  container: {
    zIndex: 11,
    width: animateWidth,
    padding: 8,
    position: 'absolute',
    backgroundColor: COLORS.background,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  selectorContainer: {
    gap: 6,
  },
  yearBlock: {
    gap: 6,
  },
  settingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingsText: {
    fontSize: 17,
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 1,
    textAlign: 'center',
    color: COLORS.textSecondary,
  },
});
