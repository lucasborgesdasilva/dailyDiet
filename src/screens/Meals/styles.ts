import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const HeaderContainer = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.colors.green.light};
`;

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 20px 20px 0 0;

  padding: 0 24px;

  align-items: center;
`;

export const Title = styled.Text`
  margin-top: 33px;

  ${({ theme }) => css`
    font-size: ${theme.fonts.size.sm}px;
    font-family: ${theme.fonts.family.bold};
    color: ${theme.colors.gray[100]};
  `};
`;



