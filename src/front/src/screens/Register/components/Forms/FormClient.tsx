import React from "react";
import SimpleInput from "@/src/components/Input/SimpleInput";
import { FormSectionContainer } from "../../../../components/Containers";
import { TitleH3 } from "@/src/components/Texts";
import AddressForm from "./AddressForm";

interface ClientFormProps {
  formData: {
    full_name: string;
    district: string;
    complement: string;
    phone: string;
    status: boolean;
    cep: string;
    city: string;
    state: string;
    street: string;
    number: string;
    latitude: number;
    longitude: number;
  };
  handleChange: (field: string, value: string | number | boolean) => void;
  marker: { latitude: number; longitude: number };
  region: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
  handleMapPress: (event: any) => void;
}


const FormClient = ({
  formData,
  handleChange,
  marker,
  region,
  handleMapPress,
}: ClientFormProps) => {
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

      <AddressForm
        addressData={formData}
        marker={marker}
        region={region}
        handleAddressChange={handleChange}
        handleMapPress={handleMapPress}
      />
    </FormSectionContainer>
  );
};

export default FormClient;
