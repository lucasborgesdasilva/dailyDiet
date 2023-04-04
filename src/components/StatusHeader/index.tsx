import { ViewProps } from "react-native";
import { Icon } from "@components/Icon";
import { ContainerWrapper, SubTitle, Title } from "./styles";

type Props = ViewProps &{
  title: string;
  subtitle?: string;
}

export function StatusHeader({title, subtitle, ...rest}: Props) {
  return (
    <ContainerWrapper {...rest}>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </ContainerWrapper>
  )
}