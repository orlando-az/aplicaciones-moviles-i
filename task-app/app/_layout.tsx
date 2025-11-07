import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "#22c55e",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Task APP",
        }}
      />
    </Stack>
  );
};

export default RootLayout;
