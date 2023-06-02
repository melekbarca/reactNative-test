import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { RootStackParamList } from '../types';
import Home from '../pages/home/home';
import TestComponenet from '../../components/folder2/login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ModalProvider from '../providers/ModalProvider/ModalProvider';


export default function Route() {
    const Stack = createNativeStackNavigator<RootStackParamList>()
    return (
        
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Login'>
                    <Stack.Screen name="Login" component={TestComponenet} />
                    <Stack.Screen name="Home" component={Home} />
                </Stack.Navigator>
            </NavigationContainer>
    

    )
}
