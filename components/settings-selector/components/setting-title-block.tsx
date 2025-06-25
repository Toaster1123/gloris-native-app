import { Container, styleSettingsTitleBlock } from '@/components';
import { LoadingPlaceholder } from '@/components/header/components/loading-placeholder';
import { getColors } from '@/constants';
import { Text, TouchableOpacity } from 'react-native';
interface Props {
  title: string;
  selectedOption: string;
  onPress: () => void;
  isLoading?: boolean;
}
export const SettingTitleBlock: React.FC<Props> = ({
  title,
  selectedOption,
  isLoading,
  onPress,
}) => {
  const COLORS = getColors();
  const style = styleSettingsTitleBlock(COLORS);
  if (isLoading) {
    return <LoadingPlaceholder propStyles={{ paddingVertical: 8 }} />;
  }
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <Container propStyles={style.container}>
        <Text style={style.title}>{title}</Text>
        <Text style={style.selectedText}>{selectedOption}</Text>
      </Container>
    </TouchableOpacity>
  );
};
