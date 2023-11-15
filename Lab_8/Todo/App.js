import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';

const stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Screen1">
        <stack.Screen
          name="Screen1"
          component={Screen1}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Screen2"
          component={Screen2}
          options={{ headerTitle: "" }}
        />
        <stack.Screen
          name="Screen3"
          component={Screen3}
          options={{ headerTitle: "" }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});