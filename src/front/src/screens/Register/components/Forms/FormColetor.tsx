import React from "react";
import SimpleInput from "@/src/components/Input/SimpleInput";
import { TitleH3 } from "@/src/components/Texts";
import MaterialsTagSelector from "../MaterialsTagsSelector";
import { FormSectionContainer } from "@/src/components/Containers";
import ToggleScore from "../ToggleScore";
import AddressForm from "./AddressForm";

interface CollectorFormProps {
  establishmentData: {
    name: string;
    phone: string;
    neighborhood: string;
    score: boolean;
    cep: string;
    city: string;
    state: string;
    street: string;
    number: string;
    latitude: number;
    longitude: number;
    product: string[];
  };
  handleChange: (field: string, value: string | boolean | number) => void;
  selectedMaterials: string[];
  setSelectedMaterials: (materials: string[]) => void;
  marker: { latitude: number; longitude: number };
  region: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
  handleMapPress: (event: any) => void;
}


const FormCollector = ({
  establishmentData,
  handleChange,
  selectedMaterials,
  setSelectedMaterials,
  marker,
  region,
  handleMapPress,
}: CollectorFormProps) => {
  return (
    <FormSectionContainer>
      <TitleH3>Informações do Estabelecimento</TitleH3>
      <SimpleInput
        label="Nome do estabelecimento"
        placeholder="Insira o nome da sua empresa"
        value={establishmentData.name}
        onChangeText={(value) => handleChange("name", value)}
        isRequired
      />

      <SimpleInput
        label="Telefone"
        placeholder="Insira seu telefone"
        value={establishmentData.phone}
        onChangeText={(value) => handleChange("phone", value)}
        keyboardType="phone-pad"
        isRequired
      />

      <AddressForm
        addressData={establishmentData}
        marker={marker}
        region={region}
        handleAddressChange={handleChange}
        handleMapPress={handleMapPress}
      />

      <MaterialsTagSelector
        selectedMaterials={selectedMaterials}
        setSelectedMaterials={setSelectedMaterials}
      />

      <ToggleScore
        value={establishmentData.score}
        onValueChange={(value) => handleChange("score", value)}
      />
    </FormSectionContainer>
  );
};

export default FormCollector;
