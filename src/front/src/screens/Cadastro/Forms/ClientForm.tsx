import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import SimpleInput from "@/src/components/Input/SimpleInput";
import { FormSectionContainer } from "@/src/components/Containers";
import { TitleH3 } from "@/src/components/Texts";

interface FormData {
  client: {
    fullName: string;
    phone: string;
    status: boolean;
  };
}

const ClientForm = () => {
  const {
    control,
    watch,
    clearErrors,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <FormSectionContainer>
      <TitleH3>Informações Pessoais</TitleH3>
      <Controller
        name="client.fullName"
        control={control}
        rules={{
          required: "Nome completo é obrigatório",
        }}
        render={({ field: { onChange, value } }) => (
          <SimpleInput
            label="Nome"
            placeholder="Insira seu nome completo"
            value={value}
            onChangeText={(text) => {
              clearErrors("client.fullName");
              onChange(text);
            }}
            autoCapitalize="words"
            error={errors?.client?.fullName?.message || ""}
            isRequired
          />
        )}
      />
      <Controller
        name="client.phone"
        control={control}
        rules={{
          required: "Telefone é obrigatório",
          pattern: {
            value: /^\(\d{2}\) \d{4,5}-\d{4}$/,
            message: "Digite um telefone válido no formato (XX) XXXXX-XXXX",
          },
        }}
        render={({ field: { onChange, value } }) => {
          const formatPhoneNumber = (text: string) => {
            // Remove caracteres não numéricos
            const cleanText = text.replace(/\D/g, "");
            // Aplica a máscara (XX) XXXXX-XXXX
            if (cleanText.length <= 10) {
              return cleanText.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
            }
            return cleanText.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
          };

          return (
            <SimpleInput
              label="Telefone"
              placeholder="Insira seu numero de telefone"
              value={value}
              onChangeText={(text) => {
                clearErrors("client.phone");
                const formattedText = formatPhoneNumber(text);
                onChange(formattedText);
              }}
              keyboardType="phone-pad"
              error={errors?.client?.phone?.message || ""}
              isRequired
            />
          );
        }}
      />
    </FormSectionContainer>
  );
};

export default ClientForm;
