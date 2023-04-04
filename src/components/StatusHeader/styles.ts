import styled, { css } from "styled-components/native";

export const ContainerWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[100]};
    font-family: ${theme.fonts.family.bold};
    font-size: ${theme.fonts.size.xxl}px;
  `};
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[200]};
    font-family: ${theme.fonts.family.regular};
    font-size: ${theme.fonts.size.sm}px;
  `};
`;