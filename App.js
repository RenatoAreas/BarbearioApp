import React from 'react';

import Checkout from './views/Checkout';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import ShoppingCart from './views/ShoppingCart';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown : false
        }}>
          <Stack.Screen name="home" component={Home}/>
          <Stack.Screen name="shoppingCart" component={ShoppingCart}/>
          <Stack.Screen name="register" component={Register}/>
          <Stack.Screen name="login" component={Login}/>
          <Stack.Screen name="checkout" component={Checkout}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;
