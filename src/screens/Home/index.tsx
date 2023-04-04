import { useCallback, useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import logoImg from '@assets/logo.png';
import profile from '@assets/profile.png';

import { Status } from "@components/Status";
import { PrimaryButton } from "@components/PrimaryButton";
import { FoodCard } from "@components/FoodCard";

import { Container, Header, Logo, Profile } from "./styles";
import { mealsGetAll } from "@storage/meal/mealsGetAll";
import { MealProps } from "@storage/meal/mealCreate";

export function Home(){
  const { navigate } = useNavigation();

  const [food, setFood] = useState<MealProps[]>([]);

  async function fetchMeals(){
    try {
      const data = await mealsGetAll();

      setFood(data);
    } catch (error) {
      throw error;
    }
  }

  function handleDetails(meal: MealProps){
    navigate('details', { meal })
  }

  useFocusEffect(useCallback(() => {
    fetchMeals();
  }, []))

  return (
    <Container>      
      <Header>
        <Logo source={logoImg} />
        <Profile source={profile} />
      </Header>

      <Status percentage="90.00%" onPress={() => navigate("meals")} />

      <Text style={{ marginTop: 40, marginBottom: 8 }}>Refeições</Text>
      <PrimaryButton 
        style={{ marginBottom: 32 }} 
        icon="add" 
        title="Nova refeição" 
        onPress={() => navigate('newMeal')}
      />

      <FlatList 
        data={food} 
        keyExtractor={item => item.name} 
        renderItem={({ item }) => (
          <>
            <FoodCard 
              key={item.time} 
              props={item} 
              onPress={() => handleDetails(item)} 
            />
          </>
        )} 
      />
    </Container>
  )
}