import { StatusBar } from "expo-status-bar";
import { Box, NativeBaseProvider } from "native-base";
import { LogBox, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import * as SplashScreen from "expo-splash-screen";
import store from "./src/store";
import { useEffect } from "react";
import {
  useFonts,
  LexendDeca_100Thin,
  LexendDeca_200ExtraLight,
  LexendDeca_300Light,
  LexendDeca_400Regular,
  LexendDeca_500Medium,
  LexendDeca_600SemiBold,
  LexendDeca_700Bold,
  LexendDeca_800ExtraBold,
  LexendDeca_900Black,
} from "@expo-google-fonts/lexend-deca";
import appTheme from "./src/theme";
import Root from "./src/navigations/Root";



SplashScreen.preventAutoHideAsync();
export default function App() {
  let [fontsLoaded] = useFonts({
    LexendDeca_100Thin,
    LexendDeca_200ExtraLight,
    LexendDeca_300Light,
    LexendDeca_400Regular,
    LexendDeca_500Medium,
    LexendDeca_600SemiBold,
    LexendDeca_700Bold,
    LexendDeca_800ExtraBold,
    LexendDeca_900Black,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    LogBox.ignoreLogs(['In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.']);
  }, []);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NativeBaseProvider theme={appTheme}>
      <Provider store={store}>
        <Root />
      </Provider>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({});
