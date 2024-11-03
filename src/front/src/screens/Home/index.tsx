import Maps from "@/src/components/Maps";
import LoginPage from "@/src/screens/Login";
import { Link, router } from "expo-router";
import { Text, View } from "react-native";
import * as SecureStore from "expo-secure-store";
import { useEffect } from "react";

export default function HomePage() {
  const tokenLogin = async () => {
    const token = await SecureStore.getItemAsync("Local_Token");

    if (token == null) {
      router.replace("/login");
    }
  };

  useEffect(() => {
    tokenLogin();
  });

  return (
    <>
      <Text>Home</Text>
      <Link href="/login">Login</Link>
    </>
  );
}
