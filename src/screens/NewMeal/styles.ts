import { TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const HeaderContainer = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.colors.gray[500]};
`;

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 20px 20px 0 0;

  padding: 0 24px 40px;

  align-items: flex-start;
`;

export const Label = styled.Text`
  margin-top: 40px;
  margin-bottom: 4px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.family.bold};
    font-size: ${theme.fonts.size.sm}px;
  `};
`;

export const Input = styled(TextInput).attrs(() => ({
  autoCorrect: false,
  autoComplete: 'off',
}))`
  width: 100%;

  border: 1px solid ${({ theme }) => theme.colors.gray[500]};
  border-radius: 6px;

  padding: 14px;
`;