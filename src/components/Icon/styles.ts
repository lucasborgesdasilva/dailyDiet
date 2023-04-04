import styled from "styled-components/native";

import { MaterialIcons} from '@expo/vector-icons';
import { ContainerColorByDiet } from "@components/Status/styles";
import { TouchableOpacity } from "react-native";

type IconProps = {
  type?: ContainerColorByDiet; 
}

export const Container = styled(TouchableOpacity)``;

export const IconType = styled(MaterialIcons).attrs<IconProps>(({theme, type}) => ({
  size: theme.fonts.size.xl,
  color: type === 'GOOD' ? theme.colors.green.dark : theme.colors.red.dark,
}))``;