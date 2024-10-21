import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 36px 24px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const LoginTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 0 16px;
`;

export const ContainerIntroduction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  align-self: stretch;
`;

export const Img = styled.img`
  max-width: 100%;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const HelperText = styled.p`
  font-size: 14px;
  color: #777;
  text-align: center;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #00321d;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #005b2c;
  }
`;
