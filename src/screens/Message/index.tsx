import { PrimaryButton } from "@components/PrimaryButton";
import { Image, Text } from "react-native";
import { useTheme } from "styled-components/native";
import { Container } from "./styles";

import GoodDiet from '@assets/good-diet.png';
import BadDiet from '@assets/bad-diet.png';
import { useNavigation, useRoute } from "@react-navigation/native";

type RouteParams = {
  inDiet: boolean;
}

export function Message() {
  const { navigate } = useNavigation();
  const { fonts, colors } = useTheme();

  const route = useRoute();
  const { inDiet } = route.params as RouteParams;

  return (
    <Container>
      <Text 
        style={{ 
          color: inDiet ? colors.green.dark : colors.red.dark, 
          fontFamily: fonts.family.bold, 
          fontSize: Number(fonts.size.xl), 
        }}>
        {inDiet ? 'Continue Assim' : 'Que pena!'}
      </Text>
      <Text 
        style={{ 
          marginBottom: 40, 
          fontSize: Number(fonts.size.md), 
          fontFamily: fonts.family.regular,
          textAlign: 'center',
        }}>
        { inDiet 
          ? 'Você continua dentro da dieta. Muito bem!'
          : 'Você saiu da dieta dessa vez, mas continue se esforçando e não desista!'}
      </Text>
      <Image style={{ marginBottom: 32 }} source={inDiet ? GoodDiet : BadDiet} />
      <PrimaryButton 
        style={{ width: 191 }} 
        title="Ir para a página inicial" 
        onPress={() => navigate("home")}
      />
    </Container>
  )
}