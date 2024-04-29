import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import QRCode from "../screens/QRCode";
import MyNotes from "../screens/MyNotes";
import PDFView from "../screens/PDFView";
import TabNavigation from "./TabNavigation";

function HomeTabs() {
  return <TabNavigation />;
}

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="entry">
      <Stack.Screen
        options={{headerShown: false}}
        name="entry"
        component={HomeTabs}
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
