# Plano de Testes de Software

Casos de Teste
1. Cadastro de Usuário (RF-01)
•	ID do teste : CT-RF01-01
•	Descrição : Validar o fluxo de cadastro do usuário.
•	Entradas : Nome, e-mail válido, senha, código de verificação correto.
•	Procedimentos :
1.	Acesse a funcionalidade de cadastro.
2.	Preencher os campos obrigatórios.
3.	Insira o código de verificação enviado ao e-mail.
4.	Submeter ou formulário.
•	Resultados Esperados :
o	Usuário cadastrado com sucesso e redirecionado para tela de login.
o	Mensagem de erro se algum campo obrigatório estiver vazio ou inválido.
________________________________________
2. Entrar (RF-02)
•	ID do teste : CT-RF02-01
•	Descrição : Validar o login com credenciais válidas e inválidas.
•	Entradas : E-mail e senha cadastrados; e-mail e senha incorretos.
•	Procedimentos :
1.	Acessar a tela de login.
2.	Inserir credenciais válidas e subscritas.
3.	Repetir com credenciais inválidas.
•	Resultados Esperados :
o	Login bem sucedido redirecionando o usuário para a página inicial.
o	Mensagem de erro clara ao inserir credenciais inválidas.
________________________________________
3. Cadastro de Local de Coleta (RF-03)
•	ID do teste : CT-RF03-01
•	Descrição : Validar o cadastro de locais de coleta.
•	Entradas : Nome, e-mail válido, senha, endereço, telefone, CNPJ válido, código e token de verificação.
•	Procedimentos :
1.	Preencha todos os campos obrigatórios.
2.	Insira o código de verificação enviado ao e-mail e token recebido por telefone.
3.	Validar o CNPJ.
4.	Submeter ou formulário.
•	Resultados Esperados :
o	Local cadastrado com sucesso.
o	Mensagem de erro clara para dados ausentes ou inválidos.
________________________________________
4. Visualização de Locais de Coleta (RF-04)
•	ID do teste : CT-RF04-01
•	Descrição : Validar a visualização dos pontos de coleta com base na localização.
•	Entradas : Localização do usuário (endereço ou coordenadas GPS).
•	Procedimentos :
1.	Insira uma localização válida.
2.	Verifique a lista de pontos de coleta retornados.
•	Resultados Esperados :
o	Pelo menos um ponto de coleta listado com detalhes (endereço, itens aceitos).
o	Mensagem citada “Nenhum local encontrado” caso não existam pontos próximos.
________________________________________
5. Agendamento de Coleta Domiciliar (RF-05)
•	ID do teste : CT-RF05-01
•	Descrição : Validar o agendamento de coleta domiciliar.
•	Entradas : Dados, horários disponíveis, tipos de itens recicláveis.
•	Procedimentos :
1.	Selecionar dados e horários disponíveis.
2.	Confirmar o agendamento.
•	Resultados Esperados :
o	Agenda realizada com sucesso e confirmação exibida ao usuário.
o	Mensagem de erro se os dados/horário não estiverem disponíveis.
________________________________________
6. Consulta de Itens Aceitos (RF-06)
•	ID do teste : CT-RF06-01
•	Descrição : Validar a exibição da lista de itens recicláveis aceitos.
•	Entradas : Nenhuma.
•	Procedimentos :
1.	Acesse a funcionalidade de consulta.
2.	Verificar a lista exibida.
•	Resultados Esperados :
o	Lista completa exibida com instruções e instruções associadas.
________________________________________
7. Notificação de Agendamento (RF-07)
•	ID do teste : CT-RF07-01
•	Descrição : Validar envio de notificação antes do agendamento.
•	Entradas : Agendamento existente.
•	Procedimentos :
1.	Crie um agendamento válido.
2.	Aguardar 24 horas antes do horário agendado.
•	Resultados Esperados :
o	Notificação enviada ao usuário por e-mail ou aplicativo.
________________________________________
8. Histórico de Reciclagens (RF-08)
•	ID do teste : CT-RF08-01
•	Descrição : Validar a exibição do histórico de reciclagens realizadas.
•	Entradas : Usuário com coletas registradas.
•	Procedimentos :
1.	Acesse a funcionalidade de histórico.
2.	Verifique os detalhes detalhados (dados, tipo e quantidade de itens).
•	Resultados Esperados :
o	Relatório exibido com informações completas.
________________________________________
9. Avaliação do Local de Coleta (RF-09)
•	ID do teste : CT-RF09-01
•	Descrição : Validar o envio de avaliações dos locais de coleta.
•	Entradas : Nota e comentário.
•	Procedimentos :
1.	Acesse o local de coleta avaliada.
2.	Submeter nota e comentário.
•	Resultados Esperados :
o	Avaliação salva com sucesso.
o	Mensagem de erro clara para dados ausentes ou inválidos.
________________________________________
10. Sistema de Recompensas (RF-11)
•	ID do teste : CT-RF11-01
•	Descrição : Validar o acúmulo e trocar pontos por recompensas.
•	Entradas : Coletas registradas, saldo de pontos.
•	Procedimentos :
1.	Realizar uma coleta e verificar o saldo de pontos atualizados.
2.	Trocar pontos por uma recompensa.
•	Resultados Esperados :
o	Pontos acumulados corretamente.
o	Troca de pontos realizada com sucesso.
________________________________________
Critérios de Aprovação
•	Todos os casos de teste deverão ser aprovados com os resultados esperados.
•	Nenhum bug crítico ou funcional deve permanecer aberto antes da entrega.

