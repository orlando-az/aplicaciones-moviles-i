import { View, Text, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useColorScheme } from "nativewind";

interface ThemedViewProps {
  children: React.ReactNode;
}
const { colorScheme } = useColorScheme();

const ThemedView = ({ children }: ThemedViewProps) => {
  return (
    <SafeAreaView className="flex-1">
      <StatusBar
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
        backgroundColor={colorScheme === "dark" ? "#1e3a8a" : "#eff6ff"} // Ajusta a tus colores primary-900 y primary-50
      />
      <View
        className="flex-1
       bg-primary-50 dark:bg-primary-900"
      >
        {children}
      </View>
    </SafeAreaView>
  );
};

export default ThemedView;
