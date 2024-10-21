import { useState } from 'react';
import Button from '../../components/Button/Button';
import InputField from '../../components/Input/Input';
import {
  LoginContainer,
  LoginTitle,
  Img,
  ContainerIntroduction,
  FormContainer,
  ButtonsContainer,
} from './style';
import ilustrationLogin from '../../assets/ilustrationLogin.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/api';
import Header from '../../components/Header';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await loginUser({ email, password });

      if (response) {
        alert('Login realizado com sucesso!');
        navigate('/home');
      }
    } catch (err) {
      setError('Email ou senha incorretos. Tente novamente.');
    }
  };

  return (
    <>
      <LoginContainer>
        <LoginTitle>
          <h1>Bem vindo ao Recicla BH</h1>
          <p style={{ color: '#BDBDBD', fontSize: '14px' }}>
            Acesse sua conta ou cadastre-se para começar a reciclar!
          </p>
        </LoginTitle>

        <ContainerIntroduction>
          <Img src={ilustrationLogin} />
          <p style={{ color: '#6d6d6d', fontSize: '12px', maxWidth: '320px' }}>
            Encontre rapidamente os pontos de reciclagem mais próximos com nosso app. Facilite sua
            rotina e contribua para um planeta mais sustentável.
          </p>
        </ContainerIntroduction>

        <hr style={{ color: '#e7e7e7', backgroundColor: '#e7e7e7', width: '100%' }} />

        <FormContainer>
          <InputField
            label="Email"
            placeholder="Insira seu email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            label="Senha"
            placeholder="Insira sua senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}

          <ButtonsContainer>
            <Button primary onClick={handleLogin}>
              Login
            </Button>
            <Link to="/cadastro" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Button secondary>Registrar</Button>
            </Link>
          </ButtonsContainer>
        </FormContainer>
      </LoginContainer>
    </>
  );
}
