import React from "react";
import styled from "styled-components/native";
import { Switch } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { Input } from "@/src/components/Input";

interface ToggleScoreProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
}

const ToggleScore = ({ value, onValueChange }: ToggleScoreProps) => {
  return (
    <Container>
      <Input.Label isRequired>Registrar Coletas?</Input.Label>
      <SwitchContainer>
        <StyledSwitch
          value={value}
          onValueChange={onValueChange}
          color="#0A8754"
        />
        <Description>
          Registre os itens entregues e garanta que os nossos usuários ganhem
          pontos por cada material reciclado!
        </Description>
      </SwitchContainer>
    </Container>
  );
};

export default ToggleScore;

const Container = styled.View`
  color: #1c1b1f;
`;

const SwitchContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Description = styled.Text`
  font-size: 12px;
  color: #555457;
  flex: 1;
`;

const StyledSwitch = styled(Switch)`
  align-self: flex-start;
`;
