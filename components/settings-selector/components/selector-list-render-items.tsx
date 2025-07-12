import { TColors, TGroupModeValues, TThemeValues, TUserGroupValues } from '@/@types';
import { FlatListIndicator } from '@fanchenbao/react-native-scroll-indicator';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SelectorListItem } from './selector-list-item';

interface Props {
  options: (TThemeValues | TUserGroupValues | TGroupModeValues)[] | null;
  isOpen: boolean;
  handleSelect: (id: number) => void;
  selectedValue: { name: string; value: string | null } | null;
  scrollCollor: TColors['settingsSelected'];
}

export const SelectorListRenderItems: React.FC<Props> = ({
  options,
  selectedValue,
  isOpen,
  handleSelect,
  scrollCollor,
}) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ marginBottom: options && options.length > 5 ? insets.bottom : 0 }}>
      {options && isOpen && (
        <FlatListIndicator
          indStyle={{ backgroundColor: scrollCollor, width: 4 }}
          flatListProps={{
            data: options,
            ItemSeparatorComponent: () => <View style={{ height: 10 }} />,
            renderItem: ({ item, index }) => (
              <SelectorListItem
                onPress={() => handleSelect(index)}
                key={`${index + item.value}`}
                title={item.name}
                selectedOption={selectedValue?.value === item.value}
              />
            ),
          }}
        />
      )}
    </View>
  );
};
