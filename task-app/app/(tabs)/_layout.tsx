import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
        tabBarActiveTintColor: "#22c55e",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={20} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "Acerca de",
          tabBarIcon: ({ color }) => (
            <Ionicons name="information-circle" color={color} size={20} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
