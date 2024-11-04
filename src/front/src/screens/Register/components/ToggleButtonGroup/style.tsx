import styled from "styled-components/native";

export const ToggleContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 4px;
  border-radius: 28px;
  background-color: #edefe4;
  gap: 4px;
`;

interface ToggleButtonProps {
  active: boolean;
}

export const ToggleButton = styled.TouchableOpacity<ToggleButtonProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 8px 8px;
  background-color: ${({ active }) => (active ? "#0A8754" : "transparent")};
  border-radius: 24px;

  ${({ active }) =>
    active &&
    `
    elevation: 2; /* Sombra específica do Android */
    shadow-color: rgba(0, 0, 0, 0.1);
    shadow-offset: 0px 2px;
    shadow-opacity: 0.1;
    shadow-radius: 2px;
  `}

  &:active {
    background-color: ${({ active }) => (active ? "#075e3b" : "#cedbc1")};
  }
`;

export const Divider = styled.View`
  width: 1px;
  height: 24px;
  background-color: #ccc;
`;
