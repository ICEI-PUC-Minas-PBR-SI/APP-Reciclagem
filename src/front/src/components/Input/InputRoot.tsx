import React, { useState } from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

interface InputRootProps {
  children: React.ReactNode;
}
const InputContainerRoot = styled.View`
  flex-direction: column;
  gap: 6px;
`;

const InputRoot = ({ children }: InputRootProps) => {
  return <InputContainerRoot>{children}</InputContainerRoot>;
};

export default InputRoot;
