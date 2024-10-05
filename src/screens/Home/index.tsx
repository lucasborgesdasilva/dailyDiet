import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { FlatList, Text } from "react-native";

import logoImg from "@assets/logo.png";
import profile from "@assets/profile.png";

import { FoodCard } from "@components/FoodCard";
import { PrimaryButton } from "@components/PrimaryButton";
import { Status } from "@components/Status";

import { MealProps } from "@storage/meal/mealCreate";
import { mealsGetAll } from "@storage/meal/mealsGetAll";
import { Container, Header, Logo, Profile } from "./styles";

export function Home() {
  const { navigate } = useNavigation();

  const [food, setFood] = useState<MealProps[]>([]);

  async function fetchMeals() {
    try {
      const data = await mealsGetAll();

      if (!data) return;

      setFood(data);
    } catch (error) {
      throw error;
    }
  }

  function handleDetails(meal: MealProps) {
    navigate("details", { meal });
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

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
        onPress={() => navigate("newMeal")}
      />

      <FlatList
        data={food}
        keyExtractor={(item) => item.name}
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
  );
}
