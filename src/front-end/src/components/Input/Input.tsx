import { useState, ChangeEvent } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { IconWrapper, InputContainer, InputStyled, InputWrapper, Label } from './style';

interface InputFieldProps {
  label?: string;
  placeholder: string;
  type?: 'text' | 'email' | 'password' | 'phone';
  name?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function InputField({ label, placeholder, type = 'text', name, value, onChange }: InputFieldProps) {
  const [inputType, setInputType] = useState<string>(type);
  const isPassword = type === 'password';

  const togglePasswordVisibility = (): void => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  return (
    <InputContainer>
      {label && <Label>{label}</Label>}
      <InputWrapper>
        <InputStyled
          type={inputType}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          hasIcon={isPassword}
        />
        {isPassword && (
          <IconWrapper onClick={togglePasswordVisibility}>
            {inputType === 'password' ? <FaEyeSlash /> : <FaEye />}
          </IconWrapper>
        )}
      </InputWrapper>
    </InputContainer>
  );
}

export default InputField;
