import { View, Text, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useColorScheme } from "nativewind";

interface ThemedViewProps {
  children: React.ReactNode;
}

const ThemedView = ({ children }: ThemedViewProps) => {
  const { colorScheme } = useColorScheme();

  return (
    <SafeAreaView className="flex-1 bg-primary-50 dark:bg-primary-900">
      <StatusBar
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
        backgroundColor={colorScheme === "dark" ? "#1e3a8a" : "#eff6ff"} // Ajusta a tus colores primary-900 y primary-50
      />
      <View className="flex-1 p-4">{children}</View>
    </SafeAreaView>
  );
};

export default ThemedView;
