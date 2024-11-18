import { Input } from "@/src/components/Input";
import SimpleInput from "@/src/components/Input/SimpleInput";
import { TitleH3 } from "@/src/components/Texts";
import React from "react";
import { Text, View } from "react-native";
import { FormSectionContainer } from "../../../../components/Containers";
import EmailInput from "@/src/components/Fields/InputEmail";

interface FormUserProps {
  formData: {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
  onInputChange: (field: string, value: string) => void;
}

const FormUser = ({ formData, onInputChange }: FormUserProps) => {
  return (
    <FormSectionContainer>
      <TitleH3>Informações para Login</TitleH3>

      <SimpleInput
        label="Nome de Usuário"
        placeholder="Digite seu nome de usuário"
        value={formData.username}
        onChangeText={(value) => onInputChange("username", value)}
        isRequired
      />


      <SimpleInput
        label="Email"
        placeholder="Digite seu email"
        value={formData.email}
        onChangeText={(value) => onInputChange("email", value)}
        keyboardType="email-address"
        isRequired
      />

      <SimpleInput
        label="Senha"
        placeholder="Digite sua senha"
        value={formData.password}
        onChangeText={(value) => onInputChange("password", value)}
        secureTextEntry
        isRequired
      />

      <SimpleInput
        label="Confirmar Senha"
        placeholder="Confirme sua senha"
        value={formData.confirmPassword}
        onChangeText={(value) => onInputChange("confirmPassword", value)}
        secureTextEntry
        isRequired
      />
    </FormSectionContainer>
  );
};

export default FormUser;
