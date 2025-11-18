import { View, Text, Switch, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useColorScheme } from "nativewind";
import ThemedView from "../../components/ThemedView";

const Settings = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const { toggleColorScheme, colorScheme } = useColorScheme();

  return (
    <ThemedView>
      <Text className="text-3xl font-bold text-primary-900 dark:text-primary-50">
        Configuración
      </Text>
      <Text className="text-sm text-primary-600 dark:text-primary-300 my-4">
        Cambia de modo claro a oscuro
      </Text>
      <TouchableOpacity className="">
        <View
          className="flex-row justify-between 
        items-center bg-primary-100 dark:bg-primary-600
        p-4 rounded-lg
        "
        >
          <View>
            <Text className="text-base font-bold text-primary-900 dark:text-primary-50">
              Modo oscuro
            </Text>
            <Text className="text-sm text-primary-600 dark:text-primary-300">
              Elije tu opción
            </Text>
          </View>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleColorScheme}
            value={colorScheme === "light"}
          />
        </View>
      </TouchableOpacity>
    </ThemedView>
  );
};

export default Settings;
