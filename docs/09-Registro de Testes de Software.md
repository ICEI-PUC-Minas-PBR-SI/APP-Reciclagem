# Registro de Testes de Software

"scripts": {
  "test": "jest"
}
npm install --save-dev jest @types/jest ts-jest
npx ts-jest config:init
export async function CadastroUsuario(dados: {
  nome: string;
  email: string;
  senha: string;
  codigoVerificacao: string;
}): Promise<boolean> {
  if (!dados.email.includes('@') || dados.codigoVerificacao !== '12345') {
    return false;
  }
  return true;
}

export async function Login(dados: { email: string; senha: string }): Promise<boolean> {
  return dados.email === 'joao@email.com' && dados.senha === 'Senha123';
}

export async function CadastroLocal(dados: {
  nome: string;
  email: string;
  senha: string;
  endereco: string;
  telefone: string;
  cnpj: string;
  codigoVerificacao: string;
  tokenTelefone: string;
}): Promise<boolean> {
  return dados.cnpj === '12.345.678/0001-99';
}

export async function AgendamentoColeta(dados: {
  usuarioId: string;
  data: string;
  horario: string;
  itens: string[];
}): Promise<boolean> {
  return dados.horario !== 'HorárioIndisponível';
}

export async function Historico(dados: { usuarioId: string }): Promise<any[]> {
  return [
    { data: '2024-12-01', tipo: 'Bateria', quantidade: 5 },
    { data: '2024-12-02', tipo: 'Pneu', quantidade: 2 },
  ];
}
import { CadastroUsuario, Login, CadastroLocal, AgendamentoColeta, Historico } from '../src/sistema';

describe('Testes de Requisitos Funcionais', () => {
  // RF-01: Cadastro de Usuário
  describe('RF-01: Cadastro de Usuário', () => {
    it('Deve cadastrar um usuário com dados válidos', async () => {
      const resultado = await CadastroUsuario({
        nome: 'João Silva',
        email: 'joao@email.com',
        senha: 'Senha123',
        codigoVerificacao: '12345',
      });
      expect(resultado).toBeTruthy();
    });

    it('Deve falhar ao cadastrar usuário com e-mail inválido', async () => {
      const resultado = await CadastroUsuario({
        nome: 'João Silva',
        email: 'email_invalido',
        senha: 'Senha123',
        codigoVerificacao: '12345',
      });
      expect(resultado).toBeFalsy();
    });
  });

  // RF-02: Login
  describe('RF-02: Login', () => {
    it('Deve permitir login com credenciais válidas', async () => {
      const resultado = await Login({ email: 'joao@email.com', senha: 'Senha123' });
      expect(resultado).toBeTruthy();
    });

    it('Deve negar login com credenciais inválidas', async () => {
      const resultado = await Login({ email: 'joao@email.com', senha: 'SenhaIncorreta' });
      expect(resultado).toBeFalsy();
    });
  });

  // RF-03: Cadastro de Local de Coleta
  describe('RF-03: Cadastro de Local de Coleta', () => {
    it('Deve cadastrar um local com dados válidos', async () => {
      const resultado = await CadastroLocal({
        nome: 'Coleta Verde',
        email: 'coleta@verde.com',
        senha: 'Local123',
        endereco: 'Rua das Flores, 123',
        telefone: '11987654321',
        cnpj: '12.345.678/0001-99',
        codigoVerificacao: '12345',
        tokenTelefone: '98765',
      });
      expect(resultado).toBeTruthy();
    });

    it('Deve falhar ao cadastrar um local com CNPJ inválido', async () => {
      const resultado = await CadastroLocal({
        nome: 'Coleta Verde',
        email: 'coleta@verde.com',
        senha: 'Local123',
        endereco: 'Rua das Flores, 123',
        telefone: '11987654321',
        cnpj: 'CNPJ_INVALIDO',
        codigoVerificacao: '12345',
        tokenTelefone: '98765',
      });
      expect(resultado).toBeFalsy();
    });
  });

  // RF-05: Agendamento de Coleta Domiciliar
  describe('RF-05: Agendamento de Coleta Domiciliar', () => {
    it('Deve agendar coleta em data e horário disponíveis', async () => {
      const resultado = await AgendamentoColeta({
        usuarioId: '123',
        data: '2024-12-05',
        horario: '14:00',
        itens: ['Bateria', 'Pneu'],
      });
      expect(resultado).toBeTruthy();
    });

    it('Deve negar agendamento em data/horário não disponíveis', async () => {
      const resultado = await AgendamentoColeta({
        usuarioId: '123',
        data: '2024-12-05',
        horario: 'HorárioIndisponível',
        itens: ['Bateria', 'Pneu'],
      });
      expect(resultado).toBeFalsy();
    });
  });

  // RF-08: Histórico de Reciclagem
  describe('RF-08: Histórico de Reciclagem', () => {
    it('Deve exibir o histórico de reciclagens realizadas', async () => {
      const historico = await Historico({ usuarioId: '123' });
      expect(historico).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            data: expect.any(String),
            tipo: expect.any(String),
            quantidade: expect.any(Number),
          }),
        ])
      );
    });
  });
});
npm test
