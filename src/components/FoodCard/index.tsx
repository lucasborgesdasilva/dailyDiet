import { MealProps } from "@storage/meal/mealCreate";
import { Touchable, TouchableOpacityProps } from "react-native";
import { ColorDiet, Container, ContainerWrapper, Description, Divider, Time } from "./styles";

type Props = TouchableOpacityProps & {
  props: MealProps;
};

export function FoodCard({props, ...rest}: Props) {
  return (
    <Container {...rest}>
      <ContainerWrapper>
        <Time>{props.time}</Time>
        <Divider />
        <Description>{props.name}</Description>
      </ContainerWrapper>
      <ColorDiet color={props.inDiet ? 'GOOD' : 'BAD'} />
    </Container>
  )
}