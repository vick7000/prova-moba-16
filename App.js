import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/home/home';
import Entregador from './pages/entregador/entregador';
import Pedido from './pages/pedidos/pedidos';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Entregador" component={Entregador}/>
        <Stack.Screen name="Pedido" component={Pedido}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

