import React from "react";
import styled from "styled-components/native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  theme?: "primary" | "secondary" | "default";
}

const Button = ({ title, onPress, theme = "default" }: ButtonProps) => {
  return (
    <StyledButton onPress={onPress} themeVariant={theme}>
      <StyledButtonText themeVariant={theme}>{title}</StyledButtonText>
    </StyledButton>
  );
};

interface StyledButtonProps {
  themeVariant: "primary" | "secondary" | "default";
}

const StyledButton = styled.TouchableOpacity<StyledButtonProps>`
  border-radius: 12px;
  padding: 12px 24px;
  align-items: center;
  background-color: ${({ themeVariant }) => {
    switch (themeVariant) {
      case "primary":
        return "#003F24";
      case "secondary":
        return "#F5F5DC";
      case "default":
        return "#A9A9A9";
    }
  }};
`;

interface StyledButtonTextProps {
  themeVariant: "primary" | "secondary" | "default";
}

const StyledButtonText = styled.Text<StyledButtonTextProps>`
  font-weight: 700;
  color: ${({ themeVariant }) => {
    switch (themeVariant) {
      case "primary":
        return "#FFFFFF";
      case "secondary":
        return "#0A8754";
      case "default":
        return "#000000";
    }
  }};
`;

export default Button;
