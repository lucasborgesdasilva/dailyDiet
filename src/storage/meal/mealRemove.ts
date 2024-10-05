import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storedConfig";
import { mealsGetAll } from "./mealsGetAll";

export async function mealRemove(meal: string) {
	try {
		const storage = await mealsGetAll();

		const filtered = storage?.filter((item) => item.name !== meal);
		const meals = JSON.stringify(filtered);

		await AsyncStorage.setItem(`${MEAL_COLLECTION}`, meals);
	} catch (error) {
		console.log(error);
	}
}
