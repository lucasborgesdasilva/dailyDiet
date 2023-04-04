import { TouchableOpacityProps, View } from "react-native";

import { Container, Title, FilterStyleProps, Dot } from "./styles";

type Props = TouchableOpacityProps & FilterStyleProps;

export function SwitchDiet({ title, isActive = false, ...rest }: Props){
  return (
    <Container title={title} isActive={isActive} {...rest}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Dot title={title} />
        <Title>{title}</Title>
      </View>
    </Container>
  )
}