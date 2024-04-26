import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Entry from "../screens/Entry";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName="entry">
            <Stack.Screen
                options={{ headerShown: false }}
                name="entry"
                component={Entry}
            />
        </Stack.Navigator>
    );
}
