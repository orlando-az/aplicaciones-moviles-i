import { View, Text } from "react-native";
import React from "react";
import * as Icons from "@expo/vector-icons";

type IconType = keyof typeof Icons;

interface IconProps {
  type: IconType;
  name: string;
  color?: string;
  size?: number;
}

const IconItem = ({ type, name, color = "red", size = 20 }: IconProps) => {
  const IconComponent = Icons[type];
  return <IconComponent name={name} color={color} size={size} />;
};

export default IconItem;
