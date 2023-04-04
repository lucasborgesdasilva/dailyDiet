import styled, { css } from "styled-components/native";

type Props = {
  color?: string;
  width: number;
  height: number;
}

export const ContainerWrapper = styled.View<Props>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  align-items: center;
  justify-content: center;

  background-color: ${({ color }) => color ? color : 'transparent' };

  padding: 16px;

  border-radius: 8px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[100]};
    font-family: ${theme.fonts.family.bold};
    font-size: ${theme.fonts.size.xl}px;
  `};
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[200]};
    font-family: ${theme.fonts.family.regular};
    font-size: ${theme.fonts.size.sm}px;
  `};

  text-align: center;
`;