import "./global.css"
import React, { useEffect } from 'react';
import { setupDatabase } from './src/database/setup';
import { testesDb } from "./src/database/testesDb";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './src/views/loginScreen';
import { Menu } from './src/views/Menu';

export default function App() {
  useEffect(() => {
    const initDB = async () => {
      try {
        await setupDatabase();
        await testesDb();
      } catch (error) {
        console.error("Falha na inicialização do DB:", error);
      }
    };

    initDB();
  }, []);

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ 
            title: "Olá, {Adicionar nome}", 
            headerStyle: { backgroundColor: "#141416" },
            headerTintColor: '#fff',
            headerBackVisible: false,
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
