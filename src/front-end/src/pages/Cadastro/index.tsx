import { useState } from 'react';
import ToggleButtonGroup from '../../components/ToggleButton';
import Button from '../../components/Button/Button';
import { DivCadastro, DivTituloCadastro, DivFormContainer, FormSection, Hr } from './style.tsx';
import InputField from '../../components/Input/Input';
import MaterialsTagSelector from '../../components/MateriaisSelector';
import ToggleInput from '../../components/Toggle/index.tsx';
import { createEstablishment, createUser } from '../../services/api.ts';
import Header from '../../components/Header/index.tsx';

const Cadastro = () => {
  const [active, setActive] = useState('CLIENT');
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    full_name: '',
    phone: '',
    district: '',
    number: 0,
    complement: '',
  });
  const [establishmentData, setEstablishmentData] = useState({
    name: '',
    district: '',
    neighborhood: '',
    number: 0,
    phone: '',
    product: true,
    score: false, // Inicialmente setado como false
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEstablishmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEstablishmentData((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggleChange = (active: string) => {
    setActive(active);
    setError(''); // Limpar o erro ao trocar o toggle
  };

  const handleScoreToggle = (active: boolean) => {
    setEstablishmentData((prev) => ({ ...prev, score: active }));
  };

  const handleSubmit = async () => {
    try {
      if (active === 'CLIENT') {
        // Validação de senhas
        if (formData.password !== confirmPassword) {
          setError('As senhas não coincidem!');
          return;
        }
        const userPayload = {
          ...formData,
          profile_name: 'CLIENT',
          status: true,
        };
        await createUser(userPayload);
        alert('Usuário criado com sucesso!');
      } else if (active === 'COLLECTOR') {
        const establishmentPayload = {
          ...establishmentData,
          product: true, // Exemplo de campo fixo
        };
        await createEstablishment(establishmentPayload);
        alert('Estabelecimento criado com sucesso!');
      }
    } catch (error) {
      console.error('Erro ao criar:', error);
      alert('Erro ao criar. Por favor, tente novamente.');
    }
  };

  return (
    <>
      <Header />
      <DivCadastro>
        <DivTituloCadastro>
          <h1>Crie sua conta</h1>
          <p style={{ color: '#BDBDBD', fontSize: '14px' }}>
            Crie sua conta e descubra o ponto de coleta mais próximo de você
          </p>
        </DivTituloCadastro>

        <ToggleButtonGroup active={active} setActive={handleToggleChange} />

        <DivFormContainer>
          <FormSection>
            <h2>Informações Login</h2>
            <InputField
              label="Nome de usuário"
              type="text"
              name="username"
              placeholder="Insira um nome de usuário"
              value={formData.username}
              onChange={handleChange}
            />
            <InputField
              label="Email"
              type="email"
              name="email"
              placeholder="Insira seu email"
              value={formData.email}
              onChange={handleChange}
            />
            <InputField
              label="Senha"
              type="password"
              name="password"
              placeholder="Crie sua senha"
              value={formData.password}
              onChange={handleChange}
            />
            <InputField
              label="Confirme sua senha"
              type="password"
              placeholder="Confirme sua senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </FormSection>
          <Hr />

          {active === 'CLIENT' && (
            <FormSection>
              <h2>Informações Pessoais</h2>
              <InputField
                label="Nome"
                type="text"
                name="full_name"
                placeholder="Insira seu nome completo"
                value={formData.full_name}
                onChange={handleChange}
              />
              <InputField
                label="Telefone"
                placeholder="Insira seu telefone"
                name="phone"
                type="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <InputField
                label="Endereço"
                placeholder="Insira seu endereço"
                name="district"
                type="text"
                value={formData.district}
                onChange={handleChange}
              />
            </FormSection>
          )}
          {active === 'COLLECTOR' && (
            <FormSection>
              <h2>Informações do Estabelecimento</h2>
              <InputField
                label="Nome do estabelecimento"
                type="text"
                name="name"
                placeholder="Insira o nome da sua empresa"
                value={establishmentData.name}
                onChange={handleEstablishmentChange}
              />
              <InputField
                label="Telefone"
                placeholder="Insira seu telefone"
                name="phone"
                type="phone"
                value={establishmentData.phone}
                onChange={handleEstablishmentChange}
              />
              <InputField
                label="Endereço"
                placeholder="Insira seu endereço"
                name="district"
                type="text"
                value={establishmentData.district}
                onChange={handleEstablishmentChange}
              />
              <MaterialsTagSelector
                selectedMaterials={selectedMaterials}
                setSelectedMaterials={setSelectedMaterials}
              />
              <ToggleInput label={'Registrar Coletas?'} onToggle={handleScoreToggle} />
            </FormSection>
          )}
        </DivFormContainer>

        <Button primary onClick={handleSubmit}>
          Criar Conta
        </Button>
      </DivCadastro>
    </>
  );
};

export default Cadastro;
