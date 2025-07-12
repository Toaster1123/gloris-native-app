import { TListGroupName } from '@/@types';
import { getColors } from '@/constants';
import { useScheduleData } from '@/hooks';
import { useSettingsStore } from '@/store';
import React from 'react';
import { Animated, Dimensions, ScrollView, View } from 'react-native';
import { stylePopupTextContainer } from '../styles';
import { LoadingPlaceholder } from './loading-placeholder';
import { PopupGroupList } from './popup-group-list';
import { PopupTextItem } from './popup-text-item';
import { SettingsButton } from './settings-button';

interface Props {
  isOpenPopup: boolean;
}

const duration = 200;
const { width } = Dimensions.get('window');
const animateWidth = width / 2;
export const PopupTextContainer: React.FC<Props> = ({ isOpenPopup }) => {
  const { settings } = useSettingsStore((state) => state);
  console.log(settings);

  React.useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isOpenPopup ? 0 : -animateWidth,
      duration,
      useNativeDriver: true,
    }).start();
  }, [isOpenPopup]);

  const slideAnim = React.useRef(new Animated.Value(-animateWidth)).current;
  const { isLoading, scheduleData } = useScheduleData();
  const groupedScheduleByYear: TListGroupName[] = [];

  scheduleData.forEach((group) => {
    const existingYear = groupedScheduleByYear.find((item) => item.year === group[0].course);
    if (existingYear) {
      existingYear.groups.push({
        groupId: group[0].id.toString(),
        groupName: group[0].title,
      });
    } else {
      groupedScheduleByYear.push({
        year: group[0].course,
        groups: [{ groupId: group[0].id.toString(), groupName: group[0].title }],
      });
    }
  });
  const COLORS = getColors();
  const style = stylePopupTextContainer(COLORS);
  return (
    <Animated.View
      style={[
        style.container,
        {
          transform: [{ translateX: slideAnim }],
          width: animateWidth,
        },
      ]}>
      <ScrollView
        contentContainerStyle={style.scrollContentContainer}
        showsVerticalScrollIndicator={false}>
        <View style={style.selectorContainer}>
          <PopupTextItem href="/" text="Все группы" />
          <PopupTextItem href="/" text="Твое расписание" />
          <View style={style.yearBlock}>
            {isLoading || groupedScheduleByYear.length === 0
              ? Array(4)
                  .fill(0)
                  .map((_, id) => <LoadingPlaceholder key={id} />)
              : groupedScheduleByYear.map((item, id) => (
                  <PopupGroupList key={id} year={item.year} groups={item.groups} />
                ))}
          </View>
        </View>
        <SettingsButton />
      </ScrollView>
    </Animated.View>
  );
};
