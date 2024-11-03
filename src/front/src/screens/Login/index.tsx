import { loginUser } from "@/src/services/api";
import React, { useState } from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";
import * as SecureStore from "expo-secure-store";
import { router } from "expo-router";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleLogin = async () => {
    if (email.length === 0 || password.length === 0) {
      setError("Preencha usuário e senha para continuar!");
      return;
    } else {
      try {
        const response = await loginUser({ email, password });

        await SecureStore.setItemAsync("Local_Token", response.access_token);

        // let result = await SecureStore.getItemAsync("Local_Token");

        router.replace("/");
      } catch (err) {
        console.log(err);
        setError("Houve um problema com o login, verifique suas credenciais!");
      }
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Text>LoginPage</Text>
      <TextInput
        placeholder="Email"
        style={{ width: "100%", borderWidth: 1, padding: 10, margin: 15 }}
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={password}
        textContentType="password"
        style={{ width: "100%", borderWidth: 1, padding: 10, margin: 15 }}
        onChangeText={setPassword}
      />
      <Button title="Teste" onPress={handleLogin} />
    </View>
  );
};

export default LoginPage;
