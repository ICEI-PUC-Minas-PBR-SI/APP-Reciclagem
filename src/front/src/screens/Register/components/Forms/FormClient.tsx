import React from "react";
import SimpleInput from "@/src/components/Input/SimpleInput";
import { FormSectionContainer } from "../../../../components/Containers";
import { TitleH3 } from "@/src/components/Titles";

interface ClientFormProps {
  formData: {
    full_name: string;
    phone: string;
    cep: string;
    city: string;
    state: string;
    street: string;
    number: string;
  };
  handleChange: (field: string, value: string) => void;
}

const FormClient = ({ formData, handleChange }: ClientFormProps) => {
  return (
    <FormSectionContainer>
      <TitleH3>Informações Pessoais</TitleH3>

      <SimpleInput
        label="Nome"
        placeholder="Insira seu nome completo"
        value={formData.full_name}
        onChangeText={(value) => handleChange("full_name", value)}
        isRequired
      />

      <SimpleInput
        label="Telefone"
        placeholder="Insira seu telefone"
        value={formData.phone}
        onChangeText={(value) => handleChange("phone", value)}
        keyboardType="phone-pad"
        isRequired
      />

      {/* Endereço */}
      <SimpleInput
        label="CEP"
        placeholder="Insira seu CEP"
        value={formData.cep}
        onChangeText={(value) => handleChange("cep", value)}
        keyboardType="numeric"
        isRequired
      />

      <SimpleInput
        label="Cidade"
        placeholder="Insira sua cidade"
        value={formData.city}
        onChangeText={(value) => handleChange("city", value)}
        isRequired
      />

      <SimpleInput
        label="Estado"
        placeholder="Insira seu estado"
        value={formData.state}
        onChangeText={(value) => handleChange("state", value)}
        isRequired
      />

      <SimpleInput
        label="Rua"
        placeholder="Insira sua rua"
        value={formData.street}
        onChangeText={(value) => handleChange("street", value)}
        isRequired
      />

      <SimpleInput
        label="Número"
        placeholder="Insira o número"
        value={formData.number}
        onChangeText={(value) => handleChange("number", value)}
        keyboardType="numeric"
        isRequired
      />
    </FormSectionContainer>
  );
};

export default FormClient;
