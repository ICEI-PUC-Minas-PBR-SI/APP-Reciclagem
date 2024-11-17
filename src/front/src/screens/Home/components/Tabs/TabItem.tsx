import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

type TabItemProps = {
  children: React.ReactNode;
  selected: boolean;
  onPress: () => void;
};

const TabItem = ({ children, selected, onPress }: TabItemProps) => {
  return (
    <TabContainer selected={selected} onPress={onPress}>
      {children}
    </TabContainer>
  );
};

const TabContainer = styled(TouchableOpacity)<{ selected: boolean }>`
  flex: 1;
  padding: 6px 12px;
  align-items: center;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  background-color: ${({ selected }) => (selected ? "#004f2d" : "#fff")};
  justify-content: center;
  gap: 6px;
`;

export default TabItem;
