import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { ToggleContainer, ToggleButton, Divider } from "./style";

export default function ToggleButtonGroup({ active, setActive }: any) {
  return (
    <ToggleContainer>
      <ToggleButton
        active={active === "CLIENT"}
        onPress={() => setActive("CLIENT")}
      >
        <Text style={{ color: active === "CLIENT" ? "#EAEFD3" : "#00321D" }}>
          Reciclador
        </Text>
      </ToggleButton>
      <Divider />
      <ToggleButton
        active={active === "COLLECTOR"}
        onPress={() => setActive("COLLECTOR")}
      >
        <Text style={{ color: active === "COLLECTOR" ? "#EAEFD3" : "#00321D" }}>
          Coletor
        </Text>
      </ToggleButton>
    </ToggleContainer>
  );
}
