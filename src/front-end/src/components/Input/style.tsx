import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;

export const Label = styled.label`
  color: #1c1b1f;
  font-size: 14px;
  font-weight: 500;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

interface InputStyledProps {
  hasIcon: boolean;
}

export const InputStyled = styled.input<InputStyledProps>`
  width: 100%;
  padding: 12px ${({ hasIcon }) => (hasIcon ? '40px' : '12px')} 12px 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  color: #555;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #4caf50; /* Cor de foco */
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5); /* Adicionando uma sombra suave para indicar foco */
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #0a381f;
  font-size: 18px;
  transition: color 0.3s ease;

  &:hover {
    color: #4caf50;
  }
`;
