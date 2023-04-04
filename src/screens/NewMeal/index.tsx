import { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

import { MaterialIcons } from '@expo/vector-icons';

import { useTheme } from "styled-components/native";
import { SwitchDiet } from "@components/SwitchDiet";
import { PrimaryButton } from "@components/PrimaryButton";

import { HeaderContainer, Container, Input, Label } from "./styles";
import { mealCreate } from "@storage/meal/mealCreate";

export function NewMeal() {
  const { fonts, colors } = useTheme();
  const { goBack, navigate } = useNavigation();

  const [selected, setSelected] = useState('');

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  async function handleNewMeal() {
    const meal = {
      name,
      description,
      date,
      time,
      inDiet: selected === 'Sim' ? true : false,
    }

    try {
      await mealCreate(meal);
      navigate("message", { inDiet: meal.inDiet });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
    <HeaderContainer>
      <View 
        style={{ 
          flexDirection: "row", 
          alignItems: "center", 
          justifyContent: "flex-start", 
          marginTop: 29,
        }}>
        <TouchableOpacity onPress={goBack}>
          <MaterialIcons  
          style={{ marginLeft: 27, marginRight: 85 }}        
          name="arrow-back" 
          size={24} 
          color={colors.gray[200]} />
        </TouchableOpacity>
        <Text 
          style={{ 
            fontFamily: fonts.family.bold, 
            fontSize: Number(fonts.size.lg)
          }}>
            Nova refeição
        </Text>
      </View>
    </HeaderContainer>

    <Container>
      <Label>Nome</Label>
      <Input
        style={{ height: 48 }} 
        onChangeText={setName} 
        value={name} 
      />

      <Label>Descrição</Label>
      <Input 
        multiline 
        style={{ height: 120 }}
        onChangeText={setDescription}
        value={description}
      />

      <View style={{ width: '100%', flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ width: 153.5 }}>
          <Label>Data</Label>
          <Input style={{ height: 48 }} onChangeText={setDate} value={date} />
        </View>
        <View style={{ width: 153.5 }}>
          <Label>Hora</Label>
          <Input style={{ height: 48 }} onChangeText={setTime} value={time} />
        </View>
      </View>

      <Label>Está dentro da dieta?</Label>
      <FlatList 
        data={['Sim', 'Não']} 
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <>
            <SwitchDiet 
              title={item} 
              isActive={item === selected} 
              onPress={() => setSelected(item)} 
            />
          </>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        contentContainerStyle={{
          width: '100%',
          height: 50,
          alignItems:"center",
          justifyContent:"space-between",
        }}
      />

      <PrimaryButton title="Cadastrar refeição" onPress={handleNewMeal} />
    </Container>
  </>
  )
}