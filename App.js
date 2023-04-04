import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text className='text-red-500'>Open up App.js to start working on your</Text>
      <StatusBar style="auto" />
    </View>
  );
}
