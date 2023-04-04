import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 50px;

  border: 1px solid ${({ theme }) => theme.colors.gray[100]};

  align-items: center;
  justify-content: center;

  flex-direction: row;

  border-radius: 6px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[100]};
    font-size: ${theme.fonts.size.sm}px;
    font-family: ${theme.fonts.family.bold};

    text-align: center;
  `};
`;