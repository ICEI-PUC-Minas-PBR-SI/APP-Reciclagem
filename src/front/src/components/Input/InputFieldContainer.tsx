import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  flex-direction: row;
  align-items: center;
  padding: 6px 8px;
  gap: 4px;
  align-self: stretch;
`;

interface InputFieldContainerProps {
  children: React.ReactNode;
}

const FieldContainerInput = ({ children }: InputFieldContainerProps) => {
  return <Container>{children}</Container>;
};

export default FieldContainerInput;
