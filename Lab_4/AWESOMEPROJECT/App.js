import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ScreenA1 from './1a';
import ScreenA2 from './1b';
import ScreenA3 from './1c';
import ScreenA4 from './1d';
import ScreenA5 from './1e';
import ScreenA6 from './2a';
import ScreenA7 from './2c';

export default function App() {
  return (
    <View> 
      <ScreenA7 />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  

