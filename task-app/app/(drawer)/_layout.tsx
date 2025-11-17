import { Drawer } from "expo-router/drawer";
import React from "react";

const DrawerLayout = () => {
  return (
    <Drawer>
      <Drawer.Screen
        name="(tabs)"
        options={{
          headerTitle: "TASK APP",
          drawerLabel: "Inicio",
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          headerTitle: "Ajustes",
          drawerLabel: "Ajustes",
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
