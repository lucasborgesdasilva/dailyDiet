import { Alert, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "styled-components/native";
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';

import { MaterialIcons } from '@expo/vector-icons';

import { Container, ContainerWrapper, Dot } from "./styles";
import { PrimaryButton } from "@components/PrimaryButton";
import { SecondaryButton } from "@components/SecondaryButton";
import { MealProps } from "@storage/meal/mealCreate";
import { useCallback, useState } from "react";
import { mealGetOne } from "@storage/meal/mealGetOne";

type RouteParams = {
  meal: MealProps;
}

export function Details() {
  const [details, setDetails] = useState<MealProps>()

  const { colors, fonts } = useTheme();
  const { goBack } = useNavigation();

  const route = useRoute();
  const { meal } = route.params as RouteParams;

  async function fetchDetails() {
    try {
      const details = await mealGetOne(meal);

      setDetails(details);
    } catch (error) {
      Alert.alert('Refeição', 'Não foi possível carregar as informações.')
    }
  }

  useFocusEffect(useCallback(() => {
    fetchDetails();
  }, []))

  return (
    <>
    <Container type={details?.inDiet}>
      <View 
        style={{ 
          flexDirection: "row", 
          alignItems: "center", 
          justifyContent: "flex-start", 
          marginTop: 29,
        }}>
        <TouchableOpacity onPress={goBack}>
          <MaterialIcons  
          style={{ marginLeft: 27, marginRight: 107 }}        
          name="arrow-back" 
          size={24} 
          color={colors.gray[200]} />
        </TouchableOpacity>
        <Text 
          style={{ 
            fontFamily: fonts.family.bold, 
            fontSize: Number(fonts.size.lg)
          }}>
            Refeição
        </Text>
      </View>
    </Container>
    <ContainerWrapper>
        <View style={{marginBottom: 24}}>
          <Text style={{ marginTop: 40, marginBottom: 8}}>
            {details?.name}
          </Text>
          <Text>
            {details?.description}
          </Text>
        </View>

        <View style={{marginBottom: 24}}>
          <Text style={{ marginTop: 40, marginBottom: 8}}>
            Data e hora
          </Text>
          <Text>
            {details?.date} às {details?.time}
          </Text>
        </View>

        <View 
          style={{ 
            flexDirection: "row", 
            alignItems: "center", 
            
            backgroundColor: colors.gray[600],
            
            paddingHorizontal: 16,
            paddingVertical: 8,

            borderRadius: 999,
            }}>
          <Dot color={details?.inDiet} />
          <Text>{details?.inDiet ? 'dentro da dieta' : 'fora da dieta'}</Text>
        </View>
      </ContainerWrapper>
      <View style={{ position: "absolute", left: 25, bottom: 40, width:'85%' }}>
        <PrimaryButton icon="drive-file-rename-outline" title="Editar refeição" style={{marginBottom: 9 }} />
        <SecondaryButton icon="delete-outline" title="Excluir refeição" />
      </View>
    </>
  )
}