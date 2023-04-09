import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";


type Props = {
  type?: boolean;
  color?: boolean; 
}

export const Container = styled.View<Props>`
  flex: 1;
  background-color: ${({ theme, type }) => 
    type === true ? theme.colors.green.light : theme.colors.red.light};
`;

export const Header = styled(SafeAreaView)``;

export const Content = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 20px 20px 0 0;

  padding: 0 24px 40px;

  align-items: flex-start;
`;

export const Section = styled.View`
  margin-bottom: 24px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.gray[100]};
  font-weight: 700;
  margin-bottom: 8px;
`;

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.fonts.size.md}px;
  color: ${({ theme }) => theme.colors.gray[200]};
  font-weight: 400;
`;

export const Dot = styled.View<Props>`
  border-radius: 999px;
  height: 8px;
  width: 8px;
  background-color: ${({ theme, color }) => 
    color === true ? theme.colors.green.dark : theme.colors.red.dark};

  margin-right: 8px;
`;

export const ContainerModal = styled.View`
  justify-content: center;

  width: 100%;
  height: 25%;

  padding: 24px;

  background-color: ${({ theme }) => theme.colors.gray[700]};

  border-radius: 8px;
`;

export const TitleModal = styled.Text`
  color: ${({ theme }) => theme.colors.gray[200]};
  font-size: ${({ theme }) => theme.fonts.size.lg}px;
  font-weight: 700;

  text-align: center;

  margin-bottom: 32px;
`;

export const ContainerModalWrapper = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`;