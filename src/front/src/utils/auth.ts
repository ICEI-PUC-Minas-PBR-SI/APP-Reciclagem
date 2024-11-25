import * as SecureStore from "expo-secure-store";
import { router } from "expo-router";

export const checkToken = async () => {
  try {
    const token = await SecureStore.getItemAsync("Local_Token");

    if (!token) {
      router.replace("/");
    }
    router.replace("/user");
  } catch (error) {
    console.error("Erro ao verificar o token:", error);
  }
};
export const logout = async () => {
  try {
    await SecureStore.deleteItemAsync("Local_Token");
    router.replace("/");
  } catch (error) {
    console.error("Erro ao deslogar:", error);
  }
};
