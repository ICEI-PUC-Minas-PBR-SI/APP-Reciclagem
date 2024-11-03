import SimpleInput from "@/src/components/Input/SimpleInput";
import { TitleH3 } from "@/src/components/Titles";
import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import MaterialsTagSelector from "../MaterialsTagsSelector";
import { FormSectionContainer } from "@/src/components/Containers";
import { Switch } from "react-native-paper";
import { Input } from "@/src/components/Input";
import ToggleScore from "../ToggleScore";

interface CollectorFormProps {
  establishmentData: {
    name: string;
    phone: string;
    district: string;
    score: boolean;
  };
  handleChange: (field: string, value: string | boolean) => void;
  selectedMaterials: string[];
  setSelectedMaterials: (materials: string[]) => void;
}

const FormCollector = ({
  establishmentData,
  handleChange,
  selectedMaterials,
  setSelectedMaterials,
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

      <SimpleInput
        label="Endereço"
        placeholder="Insira seu endereço"
        value={establishmentData.district}
        onChangeText={(value) => handleChange("district", value)}
        isRequired
      />

      <MaterialsTagSelector
        selectedMaterials={selectedMaterials}
        setSelectedMaterials={setSelectedMaterials}
      />
      <ToggleScore
        value={establishmentData.score}
        onValueChange={(value) => handleChange("score", value)}
      />

      {/* <ToggleInput
        label={"Registrar Coletas?"}
        onToggle={(active) => handleChange("score", active)}
      /> */}
    </FormSectionContainer>
  );
};

export default FormCollector;
