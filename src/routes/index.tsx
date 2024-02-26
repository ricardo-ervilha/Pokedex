import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../views/home';
import Detail from '../views/details';
import { PokemonEntity } from '../services/pokemons/types';

export type RootStackParamList = {
    Home: undefined,
    Detail: {
        pokemon: PokemonEntity
    }
}

const Routes = () => {
    const stack = createNativeStackNavigator<RootStackParamList>();

    return (
        <NavigationContainer>
            <stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <stack.Screen name='Home' component={Home}/>
                <stack.Screen name='Detail' component={Detail}/>
            </stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;