import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen1 from "./view/Screen1";
import Screen2 from "./view/Screen2";
import Screen3 from "./view/Screen3";

const stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="Screen1"
        screenOptions={{ headerShown: false }}
      >
        <stack.Screen name="Screen1" component={Screen1} />
        <stack.Screen
          name="Screen2"
          component={Screen2}
          options={{
            headerShown: true,
            title: "The world’s Best Bike",
            headerTitleStyle: {color:'red',fontSize:25,fontWeight:'700'},
            headerLeft:()=>null
          }}
        />
        <stack.Screen name="Screen3" component={Screen3}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});