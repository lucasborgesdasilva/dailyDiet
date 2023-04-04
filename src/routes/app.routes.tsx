import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { Details } from "@screens/Details";
import { Home } from "@screens/Home";
import { Meals } from "@screens/Meals";
import { NewMeal } from "@screens/NewMeal";
import { Message } from "@screens/Message";

export function AppRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name="home" 
        component={Home} 
      />
      <Screen 
        name="meals" 
        component={Meals} 
      />
      <Screen 
        name="newMeal" 
        component={NewMeal} 
      />
      <Screen 
        name="details" 
        component={Details} 
      />      
      <Screen 
        name="message" 
        component={Message} 
      />  
    </Navigator>
  )
}