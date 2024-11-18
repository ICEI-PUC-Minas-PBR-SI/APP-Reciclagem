import { FormSectionContainer } from "@/src/components/Containers";
import SimpleInput from "@/src/components/Input/SimpleInput";
import { TitleH3 } from "@/src/components/Texts";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface FormData {
  establishment: {
    name: string;
    phone: string;
    product: string[];
    score: boolean;
  };
}
const EstablishmentForm = () => {
  const {
    control,
    watch,
    clearErrors,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <FormSectionContainer>
      <TitleH3>Informações do Estabelecimento</TitleH3>
      <Controller
        name="establishment.name"
        control={control}
        rules={{
          required: "O nome do estabelecimento é obrigatório",
        }}
        render={({ field: { onChange, value } }) => (
          <SimpleInput
            label="Nome do estabelecimento"
            placeholder="Insira o nome do estabelecimento"
            value={value}
            onChangeText={(text) => {
              clearErrors("establishment.name");
              onChange(text);
            }}
            autoCapitalize="words"
            error={errors?.establishment?.name?.message || ""}
            isRequired
          />
        )}
      />
      <Controller
        name="establishment.phone"
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
                clearErrors("establishment.phone");
                const formattedText = formatPhoneNumber(text);
                onChange(formattedText);
              }}
              keyboardType="phone-pad"
              error={errors?.establishment?.phone?.message || ""}
              isRequired
            />
          );
        }}
      />
    </FormSectionContainer>
  );
};

export default EstablishmentForm;
