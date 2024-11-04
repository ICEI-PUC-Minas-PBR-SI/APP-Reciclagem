import React from "react";
import { Input } from ".";

interface SimpleInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  isRequired?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  secureTextEntry?: boolean;
}

const SimpleInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  isRequired = false,
  keyboardType = "default",
  secureTextEntry = false,
}: SimpleInputProps) => {
  return (
    <Input.Root>
      <Input.Label isRequired={isRequired}>{label}</Input.Label>
      <Input.FieldContainer>
        <Input.FieldText
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
        />
      </Input.FieldContainer>
    </Input.Root>
  );
};

export default SimpleInput;
