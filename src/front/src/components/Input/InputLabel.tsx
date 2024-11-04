import React from "react";
import styled from "styled-components/native";

const LabelText = styled.Text`
  color: #1c1b1f;
  font-size: 16px;
  font-weight: 500;
`;

const AsteriskRequiredText = styled.Text`
  color: #b90016;
  font-size: 16px;
  font-weight: 500;
`;

interface LabelProps {
  children: React.ReactNode;
  isRequired?: boolean;
}

export const LabelInput = ({ children, isRequired }: LabelProps) => {
  return (
    <LabelText>
      {children}
      {isRequired && <AsteriskRequiredText> *</AsteriskRequiredText>}
    </LabelText>
  );
};

export default LabelInput;
