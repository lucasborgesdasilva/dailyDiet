import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

import { ContainerColorByDiet } from "@components/Status/styles";


type Props = {
  color: ContainerColorByDiet;
}

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 49px;

  border: 1px solid ${({ theme }) => theme.colors.gray[500]};
  border-radius: 6px;

  padding: 14px 16px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 6px;
`;

export const ContainerWrapper = styled.View`
  flex: 1;

  min-height: 21px;
  max-height: 21px;

  flex-direction: row;

  align-items: center;
  justify-content: flex-start;
`;

export const Time = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fonts.size.xs}px;
    font-family: ${theme.fonts.family.bold};
    color: ${theme.colors.gray[100]};
  `};
`;

export const Divider = styled.View`
  height: 14px;

  border: 1px solid ${({ theme }) => theme.colors.gray[400]};

  margin: 0 12px;
`

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fonts.size.md}px;
    font-family: ${theme.fonts.family.regular};
    color: ${theme.colors.gray[100]};
  `};
`;

export const ColorDiet = styled.View<Props>`
  width: 14px;
  height: 14px;

  border-radius: 999px;

  background-color: ${({ theme, color}) => 
    color === 'GOOD' ? theme.colors.green.regular : theme.colors.red.regular };
`;