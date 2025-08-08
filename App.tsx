import "./global.css"
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { setupDatabase } from './src/database/setup';
import { testesDb } from "./src/database/testesDb";

export default function App() {
  useEffect(() => {
    setupDatabase();
    testesDb();
  }, []);

  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text className='text-2xl font-bold text-red-500'>Seja bem-vindo ao app de compras!</Text>
      <Text>oioioioioioioioioioi</Text>
    </View>
  );
}
