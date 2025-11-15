import { Stack } from "expo-router";
import "../global.css";
import { Text } from "react-native";

const RootLayout = () => {
  return (
    // <Stack
    //   screenOptions={{
    //     headerShadowVisible: false,
    //     headerStyle: {
    //       backgroundColor: "#22c55e",
    //     },
    //   }}
    // >
    //   <Stack.Screen
    //     name="index"
    //     options={{
    //       title: "Task APP",
    //     }}
    //   />
    // </Stack>
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerTitle: () => (
            <Text className="text-2xl text-green-500 font-bold">TASK APP</Text>
          ),
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
};

export default RootLayout;
