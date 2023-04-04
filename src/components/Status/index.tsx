
import { Icon } from "@components/Icon";
import { StatusHeader } from "@components/StatusHeader";
import { TouchableOpacityProps } from "react-native";
import { Container, ContainerColorByDiet } from "./styles";

type StatusProps = TouchableOpacityProps &{
  percentage: string;
  color?: ContainerColorByDiet;
}

export function Status({percentage, color, ...rest }: StatusProps) {
  return (
    <Container color="GOOD" {...rest} >
      <StatusHeader 
        title={percentage} 
        subtitle="das refeições dentro da dietas" 
      />
      <Icon 
          disabled
          style={{ position: "absolute", top: 8, right: 8 }} 
          icon="north-east" 
          type="GOOD"  
        />
    </Container>
  )
}