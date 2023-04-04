import { Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "styled-components/native";
import { useNavigation } from '@react-navigation/native';

import { ContainerColorByDiet } from "@components/Status/styles";

import { MaterialIcons } from '@expo/vector-icons';

import { Container, ContainerWrapper, Dot } from "./styles";
import { PrimaryButton } from "@components/PrimaryButton";
import { SecondaryButton } from "@components/SecondaryButton";

type Props = {
  type?: ContainerColorByDiet; 
}

export function Details({type = "GOOD"}: Props) {
  const { colors, fonts } = useTheme();
  const { goBack } = useNavigation();

  return (
    <>
    <Container type={type}>
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
            Sanduíche
          </Text>
          <Text>
            Sanduíche de pão integral com atum e salada de alface e tomate
          </Text>
        </View>

        <View style={{marginBottom: 24}}>
          <Text style={{ marginTop: 40, marginBottom: 8}}>
            Data e hora
          </Text>
          <Text>
            12/08/2022 às 16:00
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
          <Dot color={colors.green.dark} />
          <Text>Dentro da dieta</Text>
        </View>
      </ContainerWrapper>
      <View style={{ width: '100%', marginBottom: 40, paddingHorizontal: 24 }}>
        <PrimaryButton icon="drive-file-rename-outline" title="Editar refeição" style={{marginBottom: 9 }} />
        <SecondaryButton icon="delete-outline" title="Excluir refeição" />
      </View>
    </>
  )
}