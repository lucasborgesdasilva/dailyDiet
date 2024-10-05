import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storedConfig";
import type { MealProps } from "./mealCreate";

export async function mealsGetAll() {
	try {
		const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

		const meals: MealProps[] = storage ? JSON.parse(storage) : [];

		return meals;
	} catch (error) {
		console.log(error);
	}
}
