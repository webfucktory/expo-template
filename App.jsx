import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>

      <Text>Open up App.jsx to start working on your app!</Text>

      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style="auto" />

    </View>
  );
}
