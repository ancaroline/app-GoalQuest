import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../pages/Home";
import SignUpScreen from "../pages/SignUp";

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
                <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: 'Criar Conta'}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
