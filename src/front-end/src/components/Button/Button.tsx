import styled from 'styled-components';

interface ButtonProps {
  primary?: boolean;
  secondary?: boolean;
}

const Button = styled.button<ButtonProps>`
  background-color: ${({ primary, secondary }) =>
    primary ? '#0A8754' : secondary ? '#F1F3E1' : '#e0e0e0'};
  color: ${({ primary, secondary }) => (primary ? '#F7FAEA' : secondary ? '#0A8754' : '#000')};

  border: none;
  padding: 10px 20px;
  border-radius: 5px;

  cursor: pointer;

  font-size: 16px;
  font-weight: 500;

  width: 100%;

  &:hover {
    background-color: ${({ primary, secondary }) =>
      primary ? '#0A8754' : secondary ? '#D9DCC3' : '#c4c4c4'};
  }
`;

export default Button;
