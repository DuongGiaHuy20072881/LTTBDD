import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import welcome from './welcome';
import Detail from './Detail';

const stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Welcome'>
        <stack.Screen name='Welcome' component={welcome}/>
        <stack.Screen name='Detail' component={Detail}/>
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