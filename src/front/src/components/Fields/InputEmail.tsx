import React from "react";
import { Input } from "../Input";

interface Props {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  isRequired?: boolean;
}

const EmailInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  isRequired = false,
}: Props) => {
  return (
    <Input.Root>
      <Input.Label isRequired={isRequired}>{label}</Input.Label>
      <Input.FieldContainer>
        <Input.FieldText
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          keyboardType={"email-address"}
          autoCapitalize="none"
          autoComplete="email"
          inputMode="email"

        />
      </Input.FieldContainer>
    </Input.Root>
  );
};

export default EmailInput;
