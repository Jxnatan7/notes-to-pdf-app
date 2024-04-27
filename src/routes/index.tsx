import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Entry from "../screens/Entry";
import QRCode from "../screens/QRCode";
import MyNotes from "../screens/MyNotes";
import PDFView from "../screens/PDFView";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="entry">
      <Stack.Screen
        options={{headerShown: false}}
        name="entry"
        component={Entry}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="qr-code"
        component={QRCode}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="my-notes"
        component={MyNotes}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="pdf-view"
        component={PDFView}
      />
    </Stack.Navigator>
  );
}
