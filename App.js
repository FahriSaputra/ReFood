/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Category, DetailMeal, Main, VideoPlayer} from './src/Screens';
import RandomMeal from './src/Components/RandomMeal';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Main}
          options={({navigation}) => ({
            headerRight: () => <RandomMeal navigation={navigation} />,
          })}
        />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="Detail" component={DetailMeal} />
        <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
