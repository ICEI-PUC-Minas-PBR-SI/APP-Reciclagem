import styled from 'styled-components';

interface ToggleProps {
  isActive: boolean;
}

export const ToggleFieldComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`;

export const Toggle = styled.div<ToggleProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  /* padding: 2px 4px; */
  min-width: 45px;
  height: 28px;
  background-color: ${({ isActive }) => (isActive ? '#0A8754' : '#D4D6DD')};
  border-radius: 50px;
  position: relative;
  cursor: pointer;

  transition: background-color 0.3s;
`;

export const ToggleCircle = styled.div<ToggleProps>`
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  left: ${({ isActive }) => (isActive ? '20px' : '5px')};
  transition: left 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ToggleContent = styled.span`
  color: #555457;
  font-size: 12px;
`;
