import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ErrorOverlay from "../components/ErrorOverlay";
import LoadingOverlay from "../components/LoadingOverlay";
import { RootStackParams } from "./config";
import TabNav from "./TabNav";
import ExercisesDetail from "../screens/exercise/ExercisesDetail";

const Stack = createNativeStackNavigator<RootStackParams>();

const Root = () => {
  const { colors } = useTheme()
  return (
    <>
      <LoadingOverlay />
      <ErrorOverlay />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="TabNav" component={TabNav} />
          <Stack.Screen name="ExercisesDetail" component={ExercisesDetail}
            options={{
              headerShown: true,
              title: "Thông tin bài tập",
              headerTitleStyle: {
                color: "black",
              },
              headerTintColor: "black",
            }}


          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Root;

const styles = StyleSheet.create({});
