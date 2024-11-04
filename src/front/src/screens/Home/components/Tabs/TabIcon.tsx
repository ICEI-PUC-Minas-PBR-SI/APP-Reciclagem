import React from "react";
import styled from "styled-components/native";

type TabIconProps = {
  icon: string;
  selected: boolean;
};

const TabIcon = ({ icon, selected }: TabIconProps) => {
  return (
    <IconWrapper selected={selected}>
      <IconText>{icon}</IconText>
    </IconWrapper>
  );
};

const IconWrapper = styled.View<{ selected: boolean }>`
  height: 48px;
  width: 48px;
  border-radius: 24px;
  background-color: ${({ selected }) => (selected ? "#0e4a2e" : "#f2f2f2")};
  justify-content: center;
  align-items: center;
`;

const IconText = styled.Text`
  font-size: 24px;
  text-align: center;
`;

export default TabIcon;
