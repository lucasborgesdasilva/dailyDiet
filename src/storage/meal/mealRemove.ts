import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealProps } from "./mealCreate";
import { mealsGetAll } from "./mealsGetAll";
import { MEAL_COLLECTION } from "@storage/storedConfig";

export async function mealRemove(meal: string) {
  try {
    const storage = await mealsGetAll();

    const filtered = storage.filter(item => item.name !== meal)
    const meals = JSON.stringify(filtered);

    await AsyncStorage.setItem(`${MEAL_COLLECTION}`, meals)
  } catch (error) {
    throw error;
  }
}