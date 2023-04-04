import { MealProps } from "./mealCreate";
import { mealsGetAll } from "./mealsGetAll";

export async function mealGetOne(meal: MealProps){
  try {
    const storage = await mealsGetAll();

    const result = storage.find(item => item.name === meal.name)

    return result
  } catch (error) {
    throw error
  }
}