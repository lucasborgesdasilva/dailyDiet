import { TouchableOpacity } from "react-native";
import theme from "src/theme";
import styled, { css } from "styled-components/native";

export type FilterStyleProps = {
  isActive?: boolean;
  title: string;
}

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  ${({ theme, isActive, title }) => isActive && title
    ? css`
      border: 1px solid ${
        title === 'Sim' ? theme.colors.green.dark : theme.colors.red.dark};
      background-color: ${
        title === 'Sim' ? theme.colors.green.light : theme.colors.red.light};
    ` 
    : css`
      background-color: ${theme.colors.gray[600]};
    `};

  border-radius: 6px;

  width: 159.5px;
  height: 50px;

  align-items: center;
  justify-content: center;
`;

export const Dot = styled.View<FilterStyleProps>`
  border-radius: 999px;
  height: 8px;
  width: 8px;
  background-color: ${({ theme, title }) => 
    title === 'Sim' ? theme.colors.green.dark : theme.colors.red.dark};

  margin-right: 8px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.bold};
    font-size: ${theme.fonts.size.sm}px;
    color: ${theme.colors.gray[100]};
  `}
`;