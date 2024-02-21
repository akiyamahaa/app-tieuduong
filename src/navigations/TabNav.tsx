import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Box, Text, VStack, useTheme } from "native-base";
import { BottomTabsParams } from "./config";
import Ionicons from "@expo/vector-icons/Ionicons";
import Exercises from "../screens/Exercises";
import Music from "../screens/Music";
import Nutrition from "../screens/Nutrition";
import Pathological from "../screens/Pathological";

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
                name="notifications-outline"
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
                Đặt phòng của tôi
              </Text>
            </VStack>
          ),
        }}
      />
      <Tab.Screen
        name="Music"
        component={Music}
        options={{
          tabBarIcon: ({ focused }) => (
            <VStack alignItems={"center"}>
              <Ionicons
                name="notifications-outline"
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
                Đặt phòng của tôi
              </Text>
            </VStack>
          ),
        }}
      />
      <Tab.Screen
        name="Nutrition"
        component={Nutrition}
        options={{
          tabBarIcon: ({ focused }) => (
            <VStack alignItems={"center"}>
              <Ionicons
                name="notifications-outline"
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
                Đặt phòng của tôi
              </Text>
            </VStack>
          ),
        }}
      />
      <Tab.Screen
        name="Pathological"
        component={Pathological}
        options={{
          tabBarIcon: ({ focused }) => (
            <VStack alignItems={"center"}>
              <Ionicons
                name="notifications-outline"
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
                Đặt phòng của tôi
              </Text>
            </VStack>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;

const styles = StyleSheet.create({});
