import styled from 'styled-components';

interface ToggleButtonProps {
  active: boolean;
}

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 4px;
  border-radius: 24px;
  background: #edefe4;
`;

export const ToggleButton = styled.button<ToggleButtonProps>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;

  font-size: 12px;
  font-weight: 500;

  border: none;
  border-radius: 24px;

  cursor: pointer;

  background-color: ${({ active }) => (active ? '#0A8754' : 'transparent')};
  color: ${({ active }) => (active ? '#EAEFD3' : '#00321D')};
  box-shadow: ${({ active }) => (active ? '0px 2px 2px 0px rgba(0, 0, 0, 0.05)' : 'none')};

  &:hover {
    background-color: ${({ active }) => (active ? '#075e3b' : '#cedbc1')};
    color: ${({ active }) => (active ? '#EAEFD3' : '#075e3b')};
  }
`;

export const Divider = styled.hr`
  height: 8px;
`;
