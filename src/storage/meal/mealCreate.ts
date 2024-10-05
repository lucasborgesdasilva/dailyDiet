import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storedConfig";
import { mealsGetAll } from "./mealsGetAll";

export type MealProps = {
	name: string;
	description: string;
	date: string;
	time: string;
	inDiet: boolean;
};

export async function mealCreate(newMeal: MealProps) {
	try {
		const storedMeals = await mealsGetAll();

		if (!storedMeals) return;

		const storage = JSON.stringify([...storedMeals, newMeal]);
		await AsyncStorage.setItem(MEAL_COLLECTION, storage);
	} catch (error) {
		throw new Error("Algo deu errado!");
	}
}
