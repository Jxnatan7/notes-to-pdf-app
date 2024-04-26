import React from "react";
import { StatusBar } from "react-native";

import { ThemeProvider } from "@shopify/restyle";
import { theme } from "./src/theme";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#FFF"
          translucent
        />
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
}
