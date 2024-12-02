# Registro de Testes de Software

npm install playwright @playwright/test
import { test, expect } from '@playwright/test';

test.describe('Testes de Usabilidade', () => {
  // RF-01: Cadastro de Usuário
  test('Cadastro de Usuário - RF-01', async ({ page }) => {
    await page.goto('http://localhost:3000/cadastro'); // Altere para a URL real
    await page.fill('#nome', 'João Silva');
    await page.fill('#email', 'joao@email.com');
    await page.fill('#senha', 'Senha123');
    await page.fill('#codigoVerificacao', '12345');
    await page.click('#botaoCadastrar');

    const mensagem = await page.textContent('#mensagemSucesso');
    expect(mensagem).toBe('Cadastro realizado com sucesso!');
  });

  // RF-02: Login
  test('Login - RF-02', async ({ page }) => {
    await page.goto('http://localhost:3000/login');
    await page.fill('#email', 'joao@email.com');
    await page.fill('#senha', 'Senha123');
    await page.click('#botaoLogin');

    const mensagem = await page.textContent('#mensagemBoasVindas');
    expect(mensagem).toContain('Bem-vindo, João Silva!');
  });

  // RF-03: Cadastro de Local de Coleta
  test('Cadastro de Local de Coleta - RF-03', async ({ page }) => {
    await page.goto('http://localhost:3000/cadastro-local');
    await page.fill('#nome', 'Coleta Verde');
    await page.fill('#email', 'coleta@verde.com');
    await page.fill('#senha', 'SenhaLocal123');
    await page.fill('#endereco', 'Rua das Flores, 123');
    await page.fill('#telefone', '11987654321');
    await page.fill('#cnpj', '12.345.678/0001-99');
    await page.fill('#codigoVerificacao', '12345');
    await page.fill('#tokenTelefone', '98765');
    await page.click('#botaoCadastrarLocal');

    const mensagem = await page.textContent('#mensagemSucesso');
    expect(mensagem).toBe('Local de coleta cadastrado com sucesso!');
  });

  // RF-05: Agendamento de Coleta Domiciliar
  test('Agendamento de Coleta - RF-05', async ({ page }) => {
    await page.goto('http://localhost:3000/agendamento');
    await page.selectOption('#data', '2024-12-05');
    await page.selectOption('#horario', '14:00');
    await page.check('#itemBateria');
    await page.check('#itemPneu');
    await page.click('#botaoAgendar');

    const mensagem = await page.textContent('#mensagemSucesso');
    expect(mensagem).toBe('Agendamento realizado com sucesso!');
  });

  // RF-08: Histórico de Reciclagem
  test('Histórico de Reciclagem - RF-08', async ({ page }) => {
    await page.goto('http://localhost:3000/historico');
    const historico = await page.locator('#tabelaHistorico').allTextContents();

    expect(historico).toContain('2024-12-01');
    expect(historico).toContain('Bateria');
    expect(historico).toContain('5');
  });

  // RF-09: Avaliação de Local de Coleta
  test('Avaliação de Local - RF-09', async ({ page }) => {
    await page.goto('http://localhost:3000/avaliacao');
    await page.fill('#comentario', 'Serviço excelente!');
    await page.fill('#nota', '5');
    await page.click('#botaoEnviarAvaliacao');

    const mensagem = await page.textContent('#mensagemSucesso');
    expect(mensagem).toBe('Avaliação enviada com sucesso!');
  });
});
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    headless: true, // Alterar para false para observar os testes em execução
    baseURL: 'http://localhost:3000', // URL base da aplicação
  },
});
npx playwright test
