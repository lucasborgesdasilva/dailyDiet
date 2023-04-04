import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 50px;

  background-color: ${({ theme }) => theme.colors.gray[200]};

  align-items: center;
  justify-content: center;

  flex-direction: row;

  border-radius: 6px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.sm}px;
    font-family: ${theme.fonts.family.bold};

    text-align: center;
  `};
`;