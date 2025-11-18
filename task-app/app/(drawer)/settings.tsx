import { View, Text, Switch } from "react-native";
import React, { useState } from "react";
import { useColorScheme } from "nativewind";
import ThemedView from "../../components/ThemedView";

const Settings = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const { toggleColorScheme, colorScheme } = useColorScheme();

  return (
    <ThemedView>
      <Text>settings</Text>
      <Text>{colorScheme}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleColorScheme}
        value={colorScheme === "light"}
      />
      <View className="w-10 h-10 bg-primary-200 dark:bg-primary-900"></View>
    </ThemedView>
  );
};

export default Settings;
