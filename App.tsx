import "./global.css"
import React, { useEffect } from 'react';
import { setupDatabase } from './src/database/setup';
import { testesDb } from "./src/database/testesDb";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Login } from './src/views/login';
import { Menu } from './src/views/menu';
import { Cadastro } from "./src/views/cadastro";
import { Visualizar } from "./src/views/visualizar";
import { Editar } from "./src/views/editar";

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
    <SafeAreaProvider>
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
          <Stack.Screen name="Cadastro" component={Cadastro} options={{
            headerStyle: { backgroundColor: "#141416" },
            headerTintColor: '#fff',
          }} />
          <Stack.Screen name="Visualizar" component={Visualizar} options={{
            headerStyle: { backgroundColor: "#141416" },
            headerTintColor: '#fff',
          }} />
          <Stack.Screen name="Editar" component={Editar} options={{
            headerStyle: { backgroundColor: "#141416" },
            headerTintColor: '#fff',
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}