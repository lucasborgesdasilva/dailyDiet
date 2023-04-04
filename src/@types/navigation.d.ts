import { MealProps } from "@storage/meal/mealCreate";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      meals: undefined;
      newMeal: undefined;
      details: {
        meal: MealProps;
      };
      message: {
        inDiet: boolean;
      }
    }
  }
}