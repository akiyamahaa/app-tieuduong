import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Box, Text, VStack, useTheme } from "native-base";
import { BottomTabsParams } from "./config";
import Ionicons from "@expo/vector-icons/Ionicons"; 
import Exercises from "../screens/exercise/Exercises";
import Music from "../screens/music/Music";
import Nutrition from "../screens/nutrition/Nutrition";
import Pathological from "../screens/pathological/Pathological";

const Tab = createBottomTabNavigator<BottomTabsParams>();

const TabNav = () => {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {},
        // tabBarActiveTintColor: colors.background.primary,
        // tabBarInactiveTintColor: colors.coolGray[800],
      }}
    >
      <Tab.Screen
        name="Exercises"
        component={Exercises}
        options={{
          tabBarIcon: ({ focused }) => (
            <VStack alignItems={"center"}>
              <Ionicons
                name="barbell"
                size={20}
                color={
                  focused ? colors.background.primary : colors.coolGray[800]
                }
              />
              <Text
                fontSize={10}
                fontWeight={400}
                color={focused ? "text.primary" : colors.coolGray[800]}
              >
                Bài tập
              </Text>
            </VStack>
          ),
          headerShown: true,
          title: "Bài tập dành cho bạn",
          headerTitleStyle: {
            color: "black",
            fontSize: 16,
            fontWeight: "500",
          },
        }}
      />
      <Tab.Screen
        name="Nutrition"
        component={Nutrition}
        options={{
          tabBarIcon: ({ focused }) => (
            <VStack alignItems={"center"}>
              <Ionicons
                name="fitness"
                size={20}
                color={
                  focused ? colors.background.primary : colors.coolGray[800]
                }
              />
              <Text
                fontSize={10}
                fontWeight={400}
                color={focused ? "text.primary" : colors.coolGray[800]}
              >
                Dinh dưỡng
              </Text>
            </VStack>
          ),
          headerShown: true,
          title: "Dinh Dưỡng ",
          headerTitleStyle: {
            color: "black",
            fontSize: 16,
            fontWeight: "500",
          },
        }}
      />
      <Tab.Screen
        name="Music"
        component={Music}
        options={{
          tabBarIcon: ({ focused }) => (
            <VStack alignItems={"center"}>
              <Ionicons
                name="musical-notes"
                size={20}
                color={
                  focused ? colors.background.primary : colors.coolGray[800]
                }
              />
              <Text
                fontSize={10}
                fontWeight={400}
                color={focused ? "text.primary" : colors.coolGray[800]}
              >
                Nhạc thiền
              </Text>
            </VStack>
          ),
          headerShown: true,
          title: "Nhạc thiền",
          headerTitleStyle: {
            color: "black",
            fontSize: 16,
            fontWeight: "500",
          },
        }}
      />
      <Tab.Screen
        name="Pathological"
        component={Pathological}
        options={{
          tabBarIcon: ({ focused }) => (
            <VStack alignItems={"center"}>
              <Ionicons
                name="body"
                size={20}
                color={
                  focused ? colors.background.primary : colors.coolGray[800]
                }
              />
              <Text
                fontSize={10}
                fontWeight={400}
                color={focused ? "text.primary" : colors.coolGray[800]}
              >
                Bệnh lý
              </Text>
            </VStack>
          ),
          headerShown: true,
          title: "Bệnh lý",
          headerTitleStyle: {
            color: "black",
            fontSize: 16,
            fontWeight: "500",
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;

const styles = StyleSheet.create({});
