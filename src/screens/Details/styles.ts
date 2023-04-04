import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { ContainerColorByDiet } from '@components/Status/styles';


type Props = {
  type?: ContainerColorByDiet; 
  color?: string;
}

export const Container = styled(SafeAreaView)<Props>`
  background-color: ${({ theme, type }) => 
    type === 'GOOD' ? theme.colors.green.light : theme.colors.red.light};
`;

export const ContainerWrapper = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 20px 20px 0 0;

  padding: 0 24px 40px;

  align-items: flex-start;
`;

export const Dot = styled.View<Props>`
  border-radius: 999px;
  height: 8px;
  width: 8px;
  background-color: ${({ color }) => color};

  margin-right: 8px;
`;