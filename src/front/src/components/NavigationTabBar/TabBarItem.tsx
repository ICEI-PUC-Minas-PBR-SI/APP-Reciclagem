import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

interface TabBarItemProps {
  icon: React.ComponentProps<typeof MaterialIcons>["name"];
  label: string;
  isSelected: boolean;
  onPress: () => void;
}

export const TabBarItem = ({
  icon,
  label,
  isSelected,
  onPress,
}: TabBarItemProps) => {
  return (
    <TabItemContainer onPress={onPress}>
      <MaterialIcons
        name={icon}
        size={24}
        color={isSelected ? "#004f2d" : "#a09cab"}
      />
      <Label isSelected={isSelected}>{label}</Label>
    </TabItemContainer>
  );
};

const TabItemContainer = styled(TouchableOpacity)`
  align-items: center;
  gap: 4px;
`;

const Label = styled(Text)<{ isSelected: boolean }>`
  font-size: 11px;
  font-weight: 600;
  color: ${({ isSelected }) => (isSelected ? "#004f2d" : "#a09cab")};
`;
