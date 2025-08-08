import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { setupDatabase } from './database/setup';
import { testesDb } from "./database/testesDb"

export default function App() {
  useEffect(() => {
    setupDatabase();
    testesDb();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Seja bem-vindo ao app de registos de compras!</Text>
      <StatusBar style="auto" />
    </View>
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
