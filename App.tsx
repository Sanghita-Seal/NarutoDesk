import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "../NarutoDex/src/navigation/AppNavigator";
import * as NavigationBar from "expo-navigation-bar";
import { useEffect } from "react";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#18181b",
  },
};

export default function App() {

  useEffect(() => {
    NavigationBar.setVisibilityAsync("hidden"); 
  }, []);

  return (
    
      <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        <AppNavigator />
        <StatusBar style="light" />
      </NavigationContainer>
    </SafeAreaProvider>
    
  );
}