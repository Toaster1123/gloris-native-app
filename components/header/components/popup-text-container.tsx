import { COLORS } from '@/constants';
import { useScheduleData } from '@/hooks';
import { splitGroupName } from '@/lib';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';
import { PopupTextItem } from './popup-text-item';

interface Props {
  slideAnim: Animated.Value;
}
const { width } = Dimensions.get('window');
const animateWidth = width / 2;
export const PopupTextContainer: React.FC<Props> = ({ slideAnim }) => {
  const { isLoading, scheduleData } = useScheduleData();
  return (
    <Animated.View
      style={[
        style.container,
        {
          transform: [{ translateX: slideAnim }],
        },
      ]}>
      <View>
        <PopupTextItem text="Все группы" />
        <View style={style.yearBlock}>
          {isLoading
            ? null
            : scheduleData.map((item, id) => {
                if (id === 0) {
                  return (
                    <>
                      <PopupTextItem key={item.groupName + id} text="1 курс" />
                      <PopupTextItem key={item.groupName} text={item.groupName} />
                    </>
                  );
                }
                if (
                  Number(splitGroupName(scheduleData[id - 1].groupName).groupCode[0]) <
                  Number(splitGroupName(item.groupName).groupCode[0])
                ) {
                  return (
                    <>
                      <PopupTextItem
                        key={item.groupName + id}
                        text={`${splitGroupName(item.groupName).groupCode[0]} курс`}
                      />
                      <PopupTextItem key={item.groupName} text={item.groupName} />
                    </>
                  );
                }
                return <PopupTextItem key={item.groupName} text={item.groupName} />;
              })}
        </View>
        <View>
          <PopupTextItem text="Твое расписание" />
          <PopupTextItem text="Совмещенные пары" />
          <PopupTextItem text="Веб - версия" />
        </View>
      </View>
      <PopupTextItem text="Настройки" />
    </Animated.View>
  );
};

const style = StyleSheet.create({
  container: {
    zIndex: 11,
    width: animateWidth,
    padding: 16,
    position: 'absolute',
    backgroundColor: COLORS.background,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  yearBlock: {
    marginVertical: 16,
  },
});
