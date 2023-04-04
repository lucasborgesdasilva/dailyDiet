import { ViewProps } from "react-native";
import { ContainerWrapper, SubTitle, Title } from "./styles";

type Props = ViewProps &{
  title: string;
  subtitle?: string;
  color?: string;
  width: number;
  height: number;
}

export function DefaultCard({title, subtitle, color, width, height, ...rest}: Props) {
  return (
    <ContainerWrapper width={width}  height={height} color={color} {...rest}>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </ContainerWrapper>
  )
}