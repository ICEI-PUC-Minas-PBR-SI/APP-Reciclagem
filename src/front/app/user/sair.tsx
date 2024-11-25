import LocalsPage from "@/src/screens/Locals";
import { logout } from "@/src/utils/auth";
import { useEffect, useState } from "react";
import { Text } from "react-native";

export default function Sair() {
  useEffect(() => {
    logout();
  });
  return <></>;
}
