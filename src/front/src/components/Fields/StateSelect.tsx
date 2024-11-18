import React from "react";
import { Picker } from "@react-native-picker/picker";
import styled from "styled-components/native";
import { Input } from "../Input";

interface StateSelect {
  selectedValue: string;
  onValueChange: (value: string) => void;
}

const Container = styled.View`
  flex-direction: column;
  gap: 6px;
`;

const PickerContainer = styled.View`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

const StyledPicker = styled(Picker)`
  background-color: #fff;
`;

const PickerItemStyle = {
  fontSize: 14,
  color: "#1f1f1f",
};

const stateOptions = [
  { label: "UF", value: "", style: { fontSize: 14, color: "#444444" } },
  { label: "AC", value: "Acre" },
  { label: "AL", value: "Alagoas" },
  { label: "AP", value: "Amapá" },
  { label: "AM", value: "Amazonas" },
  { label: "BA", value: "Bahia" },
  { label: "CE", value: "Ceará" },
  { label: "DF", value: "Distrito Federal" },
  { label: "ES", value: "Espírito Santo" },
  { label: "GO", value: "Goiás" },
  { label: "MA", value: "Maranhão" },
  { label: "MT", value: "Mato Grosso" },
  { label: "MS", value: "Mato Grosso do Sul" },
  { label: "MG", value: "Minas Gerais" },
  { label: "PA", value: "Pará" },
  { label: "PB", value: "Paraíba" },
  { label: "PR", value: "Paraná" },
  { label: "PE", value: "Pernambuco" },
  { label: "PI", value: "Piauí" },
  { label: "RJ", value: "Rio de Janeiro" },
  { label: "RN", value: "Rio Grande do Norte" },
  { label: "RS", value: "Rio Grande do Sul" },
  { label: "RO", value: "Rondônia" },
  { label: "RR", value: "Roraima" },
  { label: "SC", value: "Santa Catarina" },
  { label: "SP", value: "São Paulo" },
  { label: "SE", value: "Sergipe" },
  { label: "TO", value: "Tocantins" },
];

const StatePicker: React.FC<StateSelect> = ({
  selectedValue,
  onValueChange,
}) => {
  return (
    <Container>
      <Input.Label isRequired>Estado</Input.Label>
      <PickerContainer>
        <StyledPicker
          selectedValue={selectedValue}
          onValueChange={(itemValue: unknown) => {
            const value = itemValue as string;
            onValueChange(value);
          }}
          dropdownIconColor="#1f1f1f"
          style={{
            width: "100%",
          }}
        >
          {stateOptions.map(({ label, value, style }) => (
            <Picker.Item
              key={value}
              label={label}
              value={value}
              style={style || PickerItemStyle}
            />
          ))}
        </StyledPicker>
      </PickerContainer>
    </Container>
  );
};

export default StatePicker;
