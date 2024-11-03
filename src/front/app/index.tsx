import { Link } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

export default function Index() {
  const [value, setValue] = useState<string>("");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/login">Login</Link>
      <Link href="/register">Registro</Link>
    </View>
  );
}
