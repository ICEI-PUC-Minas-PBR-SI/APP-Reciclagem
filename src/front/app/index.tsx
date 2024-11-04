import HomePage from "@/src/screens/Home";
import { Link } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

export default function Index() {
  const [value, setValue] = useState<string>("");

  return <HomePage />;
}
