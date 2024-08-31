import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./pages/home";
import { SignUpScreen } from "./pages/signUp";

const Stack = createStackNavigator();

export function Routes() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{ headerShown: false }} 
                />
                <Stack.Screen 
                    name="SignUp" 
                    component={SignUpScreen} 
                    options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
