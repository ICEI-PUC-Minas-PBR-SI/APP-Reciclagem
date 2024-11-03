import React from "react";
import { TextInputProps } from "react-native";

import styled from "styled-components/native";

const StyledTextInput = styled.TextInput`
  font-size: 14px;
  color: #1f1f1f;
  flex: 1;
`;

interface InputProps extends TextInputProps {
  label?: string;
  icon?: string;
  type?: "text" | "email" | "password" | "number" | "phone";
}

const getKeyboardType = (type: string) => {
  switch (type) {
    case "email":
      return "email-address";
    case "number":
    case "phone":
      return "numeric";
    default:
      return "default";
  }
};

const FieldTextInput = ({
  label,
  icon,
  type = "text",
  ...rest
}: InputProps) => {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <StyledTextInput
      keyboardType={getKeyboardType(type)}
      secureTextEntry={type === "password"}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...rest}
    />
  );
};

export default FieldTextInput;
