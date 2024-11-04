import React from "react";
import styled from "styled-components/native";

interface Props {
  children: React.ReactNode;
}

const TabContainer = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 8px;
  flex: 1;
`;

export default TabContainer;
