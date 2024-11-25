import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import SimpleInput from "@/src/components/Input/SimpleInput";

interface FormData {
  user: {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
}

const UserForm = () => {
  const {
    control,
    watch,
    clearErrors,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <>
      <Controller
        name="user.username"
        control={control}
        rules={{
          required: "Nome de usuário é obrigatório",
          validate: (value) => {
            if (/\s/.test(value)) {
              return "O nome de usuário não pode conter espaços";
            }
            return true;
          },
        }}
        render={({ field: { onChange, value } }) => (
          <SimpleInput
            label="Nome de Usuário"
            placeholder="Escolha um nome de usuário"
            value={value}
            onChangeText={(text) => {
              clearErrors("user.username");
              onChange(text.replace(/\s/g, ""));
            }}
            autoCapitalize="none"
            error={errors?.user?.username?.message || ""}
            isRequired
          />
        )}
      />

      <Controller
        name="user.email"
        control={control}
        rules={{
          required: "Email é obrigatório",
        }}
        render={({ field: { onChange, value } }) => (
          <SimpleInput
            label="Email"
            placeholder="Digite seu email"
            value={value}
            onChangeText={(text) => {
              clearErrors("user.email");
              onChange(text);
            }}
            keyboardType="email-address"
            isRequired
            error={errors?.user?.email?.message || ""}
          />
        )}
      />

      <Controller
        name="user.password"
        control={control}
        rules={{
          required: "Senha é obrigatória",
          minLength: {
            value: 6,
            message: "A senha deve ter pelo menos 6 caracteres",
          },
        }}
        render={({ field: { onChange, value } }) => (
          <SimpleInput
            label="Senha"
            placeholder="Digite sua senha"
            value={value}
            onChangeText={(text) => {
              clearErrors("user.password");
              onChange(text);
            }}
            secureTextEntry
            isRequired
            error={errors?.user?.password?.message || ""}
          />
        )}
      />

      <Controller
        name="user.confirmPassword"
        control={control}
        rules={{
          required: "Confirmação de senha é obrigatória",
          validate: (value) =>
            value === watch("user.password") || "As senhas não coincidem",
        }}
        render={({ field: { onChange, value } }) => (
          <SimpleInput
            label="Confirmar Senha"
            placeholder="Confirme sua senha"
            value={value}
            onChangeText={(text) => {
              clearErrors("user.confirmPassword");
              onChange(text);
            }}
            secureTextEntry
            isRequired
            error={errors?.user?.confirmPassword?.message || ""}
          />
        )}
      />
    </>
  );
};

export default UserForm;
