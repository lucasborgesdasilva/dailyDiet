import { useNavigation } from '@react-navigation/native';

import { Icon } from "@components/Icon";
import { HeaderContainer, Container, Title } from "./styles";
import { StatusHeader } from "@components/StatusHeader";
import { View } from "react-native";
import { useTheme } from "styled-components/native";
import { DefaultCard } from "@components/DefaultCard";

export function Meals() {
  const { colors } = useTheme();
  const { goBack } = useNavigation();

  return (
    <>
      <HeaderContainer>
        <View>
          <Icon 
            style={{ marginLeft: 27 }} 
            icon="arrow-back"
            type="GOOD"  
            onPress={goBack}
          />
          <StatusHeader  
            title="90.00%" 
            subtitle="das refeições dentro da dieta" 
          />
        </View>
      </HeaderContainer>

      <Container>
      <Title>Estatísticas gerais</Title>

      <DefaultCard 
        width={327}
        height={89}
        style={{ marginTop: 23, marginBottom: 12 }}
        color={colors.gray[600]}    
        title="4" 
        subtitle="melhor sequência de pratos dentro da dieta"
      />

      <DefaultCard 
        width={327}
        height={89}
        style={{ marginBottom: 12}}
        color={colors.gray[600]}    
        title="109" 
        subtitle="refeições registradas"
      />

      <View 
        style={{ 
          flexDirection: "row", 
          justifyContent: "space-between", 
          alignItems: "center"
        }}
      >
        <DefaultCard 
          width={157.5}
          height={107}
          color={colors.green.light}    
          title="32" 
          subtitle="refeições dentro da dieta"
          style={{ marginRight: 12}}
        />
        <DefaultCard 
          width={157.5}
          height={107}
          color={colors.red.light}    
          title="77" 
          subtitle="refeições fora da dieta"
        />
      </View>
    </Container>
    </>
  )
}