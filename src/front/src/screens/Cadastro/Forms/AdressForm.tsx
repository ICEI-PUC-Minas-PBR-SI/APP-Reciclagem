import { FormSectionContainer } from "@/src/components/Containers";
import StatePicker from "@/src/components/Fields/StateSelect";
import SimpleInput from "@/src/components/Input/SimpleInput";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import styled from "styled-components/native";

interface FormData {
  adress: {
    district: string;
    complement: string;
    cep: string;
    city: string;
    state: string;
    street: string;
    number: string;
  };
}

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
`;
const LargeContainer = styled.View`
  flex: 2;
`;

const SmallContainer = styled.View`
  flex: 1;
`;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: 300,
  },
});

const AdressForm = () => {
  const {
    control,
    clearErrors,
    formState: { errors },
  } = useFormContext<FormData>();

  const formatCEP = (text: string) => {
    const cleanText = text.replace(/\D/g, "");
    return cleanText.replace(/(\d{5})(\d{0,3})/, "$1-$2");
  };

  return (
    <FormSectionContainer>
      <Controller
        name="adress.cep"
        control={control}
        rules={{
          required: "O CEP é obrigatório",
          pattern: {
            value: /^\d{5}-\d{3}$/,
            message: "Digite um CEP válido no formato XXXXX-XXX",
          },
        }}
        render={({ field: { onChange, value } }) => (
          <SimpleInput
            label="CEP"
            placeholder="Insira seu CEP"
            value={value}
            onChangeText={(text) => {
              clearErrors("adress.cep");
              const formattedText = formatCEP(text);
              onChange(formattedText);
            }}
            keyboardType="numeric"
            error={errors?.adress?.cep?.message || ""}
            isRequired
          />
        )}
      />

      <Row>
        <LargeContainer>
          <Controller
            name="adress.city"
            control={control}
            rules={{
              required: "Cidade é obrigatória",
            }}
            render={({ field: { onChange, value } }) => (
              <SimpleInput
                label="Cidade"
                placeholder="Insira sua Cidade"
                value={value}
                onChangeText={(text) => {
                  clearErrors("adress.city");
                  onChange(text);
                }}
                autoCapitalize="words"
                error={errors?.adress?.city?.message || ""}
                isRequired
              />
            )}
          />
        </LargeContainer>
        <SmallContainer>
          <Controller
            name="adress.state"
            control={control}
            rules={{
              required: "Estado é obrigatório",
            }}
            render={({ field: { onChange, value } }) => (
              <StatePicker
                selectedValue={value}
                onValueChange={(selectedState) => {
                  clearErrors("adress.state");
                  onChange(selectedState);
                }}
              />
            )}
          />
        </SmallContainer>
      </Row>

      <Row>
        <LargeContainer>
          <Controller
            name="adress.street"
            control={control}
            rules={{
              required: "A rua é obrigatória",
            }}
            render={({ field: { onChange, value } }) => (
              <SimpleInput
                label="Rua"
                placeholder="Insira sua rua"
                value={value}
                onChangeText={(text) => {
                  clearErrors("adress.street");
                  onChange(text);
                }}
                error={errors?.adress?.street?.message || ""}
                isRequired
              />
            )}
          />
        </LargeContainer>
        <SmallContainer>
          <Controller
            name="adress.number"
            control={control}
            rules={{
              required: "O número é obrigatório",
            }}
            render={({ field: { onChange, value } }) => (
              <SimpleInput
                label="Número"
                placeholder="N°"
                value={value}
                onChangeText={(text) => {
                  clearErrors("adress.number");
                  onChange(text);
                }}
                keyboardType="numeric"
                error={errors?.adress?.number?.message || ""}
                isRequired
              />
            )}
          />
        </SmallContainer>
      </Row>
    </FormSectionContainer>
  );
};

export default AdressForm;
