import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ContainerColorByDiet = 'GOOD' | 'BAD';

type Props = {
  color: ContainerColorByDiet;
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  height: 102px;

  border-radius: 8px;

  background-color: ${({ theme, color}) => 
    color === 'GOOD' ? theme.colors.green.light : theme.colors.red.light };

  padding: 20px 20px;
`;
