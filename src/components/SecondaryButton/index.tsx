import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import { Container, Title } from "./styles";
import { useTheme } from "styled-components/native";

type Props = TouchableOpacityProps & {
  icon?: keyof typeof MaterialIcons.glyphMap;
  title: string;
}

export function SecondaryButton({ icon, title, ...rest }: Props) {
  const { colors } = useTheme();

  return (
    <Container {...rest}>
      <MaterialIcons 
        name={icon} 
        size={18} 
        color={colors.gray[200]} 
      />
      <Title>{title}</Title>
    </Container>
  )
}