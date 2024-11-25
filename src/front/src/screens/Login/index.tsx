import { loginUser } from "@/src/services/api";
import React, { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { Redirect, router } from "expo-router";
import {
  ContainerPage,
  FormSectionContainer,
} from "@/src/components/Containers";
import TitlePage from "@/src/components/TitlePage/inde";
import SimpleInput from "@/src/components/Input/SimpleInput";
import Button from "@/src/components/Button";
import { ContainerButton, ContainerImg, Img } from "./style";
import { DescriptionText, ErrorMensage } from "@/src/components/Texts";
import DividerHorizontal from "@/src/components/Divider";
import { ScrollView } from "react-native";
import { checkToken } from "@/src/utils/auth";

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

        router.replace("/user");
      } catch (err) {
        console.log(err);
        setError("Houve um problema com o login, verifique suas credenciais!");
      }
    }
  };

  const handleEmail = (value: any) => {
    setEmail(value);
    setError("");
  };

  return (
    <ScrollView>
      <ContainerPage>
        <TitlePage
          title="Bem vindo ao Recicla BH"
          subtitle="Acesse sua conta ou cadastre-se para começar a reciclar!"
        />
        <ContainerImg>
          <Img source={require("@/src/assets/images/loginImg.png")} />
          <DescriptionText>
            Encontre rapidamente os pontos de reciclagem mais próximos com nosso
            app. Facilite sua rotina e contribua para um planeta mais
            sustentável.
          </DescriptionText>
        </ContainerImg>
        <DividerHorizontal />
        <FormSectionContainer>
          <SimpleInput
            label="Email"
            onChangeText={handleEmail}
            placeholder="Insira seu email"
            value={email}
            isRequired
          />
          <SimpleInput
            label="Senha"
            onChangeText={setPassword}
            placeholder="Insira sua senha"
            value={password}
            isRequired
            secureTextEntry
          />
          {error && <ErrorMensage>{error}</ErrorMensage>}
        </FormSectionContainer>
        <ContainerButton>
          <Button title="Login" theme="primary" onPress={handleLogin} />
          <Button
            title="Registrar"
            theme="secondary"
            onPress={() => router.navigate("/register")}
          />
        </ContainerButton>
      </ContainerPage>
    </ScrollView>
  );
};

export default LoginPage;
