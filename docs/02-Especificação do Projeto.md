# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>


## Personas

### 1. Guilherme Henrique
- **Idade**: 27 anos  
- **Sexo**: Masculino  
- **Profissão**: Estudante  
- **Localização**: Belo Horizonte, MG  

**Personalidade**: Apaixonado por IoT, sempre se atualiza no mercado e tem a necessidade de poder renovar sempre seus equipamentos eletrônicos.  

**Frustração**: Não encontrar um ponto de coleta, e ficar acumulando lixo em casa até encontrar o local certo.  

**Necessidade**:  
Estou procurando um local para reciclar materiais de computadores, como placas e cabos. Onde posso descarregar esses itens? Quais são os horários de funcionamento? Também gostaria de saber como devo preparar os materiais para garantir uma reciclagem adequada e eficiente.  

**Dificuldades**:  
Além de não conhecer nenhum local para descarte adequado de lixo eletrônico, trabalho em horário comercial e tenho dificuldade em levar o lixo até um local próprio para descarte. Além disso, me incomoda não entender exatamente como ou por que devo levar até um determinado lugar.  

**Objetivo**:  
Realizar o descarte adequado de lixo eletrônico.  

---

### 2. Ellen Silva
- **Idade**: 24 anos  
- **Sexo**: Feminino  
- **Profissão**: Desenvolvedora  
- **Localização**: Rio de Janeiro, RJ  

**Personalidade**: Sou uma desenvolvedora e amo minha profissão, adoro poder ajudar os outros e tento fazer do mundo um lugar melhor.  

**Frustração**: Não divulgar todos os pontos de coleta, e não ajudar com eficiência quem quer reciclar.  

**Necessidade**:  
Poder desenvolver um sistema que ajude pessoas a fazer o bem, como reciclar materiais mais complexos, como placas de computadores, baterias alcalinas e de lítio, podendo divulgar pontos de reciclagem para usuários interessados.  

**Dificuldades**:  
Além da complexidade de desenvolver um programa para reciclagem, devo fazer buscas eficientes de pontos adequados de descarte, pesquisando indicações de locais com ajuda da internet via telefonemas e indicações.  

**Objetivo**:  
Poder ajudar o mundo e o próximo usando minha profissão para ter um maior alcance.  

---

### 3. Eduardo Costa
- **Idade**: 46 anos  
- **Sexo**: Masculino  
- **Profissão**: Empresário  
- **Localização**: Contagem, MG  

**Personalidade**: Sou empresário no ramo de reciclagem, desenvolvo esse papel há 12 anos, sou um entusiasta da tecnologia e me preocupo com o meio ambiente.  

**Frustração**: Não conseguir alcançar uma quantidade ideal de material para manter os empregados e minha família.  

**Necessidade**:  
Preciso maximizar meus clientes e ter uma maior visibilidade, receber mais itens para reciclagem, podendo obter um lucro maior e gerar empregos.  

**Dificuldades**:  
Apenas os cartazes de apresentação e a fachada do depósito de reciclagem não têm sido o suficiente para receber uma boa quantidade de itens para a reciclagem, tendo poucos recursos, minha renda diminui.  

**Objetivo**:  
Realizar mais reciclagem para ter um lucro maior e tornar o mundo melhor.  

---




## Histórias de Usuários

* COMO Guilherme Henrique	PRECISO localizar rapidamente pontos de coleta para materiais eletrônicos	PARA evitar o acúmulo de lixo eletrônico em casa e contribuir para o meio ambiente

* EU COMO Eduardo Costa	QUERO aumentar a visibilidade do meu serviço de reciclagem	PARA atrair mais clientes e receber mais materiais recicláveis, garantindo lucro e sustentabilidade

* EU COMO Ellen Campos	QUERO acessar um sistema seguro e com login protegido	PARA garantir a privacidade e proteção das informações dos usuários

* EU COMO usuário	QUERO registrar os materiais que reciclo e acessar meu histórico	PARA acompanhar meu impacto positivo no meio ambiente e manter a motivação para continuar reciclando

* EU COMO desenvolvedor	PRECISO que haja criptografia e autenticação segura para proteger os dados dos usuários	PARA garantir que as informações pessoais estejam seguras e evitar riscos de segurança



## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais
| **ID**  | **Título**              | **Descrição**                                                                 | **Prioridade** | **Critério de Aceitação**                                                               |
|---------|--------------------------|-------------------------------------------------------------------------------|----------------|----------------------------------------------------------------------------------------|
| RF-01   | Cadastro Usuário         | Cadastrar os usuários fornecendo nome, e-mail e senha.                        | Alta           | Inserir código de verificação recebido pelo e-mail; senha deve atender a requisitos de segurança. |
| RF-02   | Login                    | Autorizar que usuários façam login utilizando o e-mail e senha cadastrados.    | Alta           | O usuário deve conseguir acessar o sistema após fornecer credenciais válidas e receber mensagens de erro caso forneça dados incorretos. |
| RF-03   | Cadastro local de coleta | Cadastrar local de coleta com nome, e-mail, senha, endereço, telefone, CNPJ.  | Alta           | Inserir código de verificação recebido por telefone e número de CNPJ válido.           |
| RF-04   | Locais de Coleta         | Visualizar pontos de coleta de itens recicláveis próximos e detalhes.          | Alta           | Após fornecer uma localização, o sistema deve listar pelo menos um ponto de coleta com detalhes como endereço e itens aceitos. |
| RF-05   | Itens Aceitos            | Consultar uma lista de itens recicláveis aceitos, com descrições e instruções. | Média          | O usuário deve visualizar a lista completa de itens recicláveis e as informações associadas antes de usar a funcionalidade. |
| RF-06   | Histórico                | Consultar relatório com histórico de reciclagens realizadas, datas, tipos.    | Baixa          | O usuário deve visualizar um relatório completo com detalhes das reciclagens realizadas, incluindo datas e opções de histórico. |
| RF-07   | Avaliação do local       | Avaliar pontos de coleta com notas e descrição de experiência.                | Média          | Após o cadastro, o sistema deve permitir que o usuário faça uma avaliação do local, que será registrada e exibida publicamente. |
| RF-08   | Ranking                  | Pontuar usuários de acordo com o registro de materiais reciclados.             | Alta           | O local de reciclagem deve conferir a informação e validar para empresa.               |
| RF-09   | Validação                | Conferir itens entregues no local de reciclagem para pontuar o usuário.       | Média          | O local deve validar a entrega do item antes de atualizar a pontuação do usuário no sistema, evitando erros ou manipulação.     |


### Requisitos não Funcionais

| **ID**  | **Título**      | **Descrição**                                                                 | **Prioridade** | **Critério de Aceitação**                                                               |
|---------|------------------|-------------------------------------------------------------------------------|----------------|----------------------------------------------------------------------------------------|
| RNF-01  | Desempenho       | Carregar a página inicial em até 5 segundos.                                 | Alta           | Medição de tempo garantindo sucesso em 95% das tentativas.                             |
| RNF-02  | Disponível       | Estar disponível para acesso dos usuários 24 horas por dia, 7 dias por semana, com uma taxa de uptime mínima de 99,5% ao mês. | Alta           | Relatórios de monitoramento mensal devem mostrar que o sistema esteve disponível por pelo menos 99,5% do mês. |
| RNF-03  | Segurança        | Implementar autenticação e criptografia de dados sensíveis, como senhas e informações pessoais dos usuários. | Alta           | Todos os dados sensíveis devem ser armazenados utilizando criptografia AES de 256 bits, e o sistema deve exigir autenticação para as operações de acesso e modificação de dados. |
| RNF-04  | Escalabilidade   | Escalonar para suportar até 1.000 usuários simultâneos sem degradação significativa do desempenho. | Média          | Durante os testes de carga, o sistema deve demonstrar a capacidade de suportar 1.000 usuários simultâneos com um tempo de resposta médio de até 3 segundos. | 
| RNF-05  | Compatível       | Conectar com os principais navegadores, incluindo Google Chrome, Mozilla Firefox, Safari e Microsoft Edge, nas versões mais recentes. | Média          | Os testes de usabilidade devem confirmar que todas as funcionalidades do sistema operam corretamente nos navegadores especificados. |
| RNF-06  | Usabilidade      | Possuir uma interface intuitiva e amigável, permitindo que novos usuários concluam um cadastro e agendem uma coleta sem a necessidade de suporte técnico. | Média          | Testes de usabilidade com um grupo de usuários devem mostrar que pelo menos 90% dos participantes conseguiram concluir o cadastro e agendar uma coleta em menos de 5 minutos. |
| RNF-07  | Manutenção       | Criar o código modular e documentado, permitindo que a equipe de desenvolvimento implemente correções e melhorias em até 4 horas após a identificação de um problema. | Baixa          | Durante o desenvolvimento e manutenção, a equipe de TI deve ser capaz de implementar atualizações ou correções em até 4 horas, com base na documentação e modularidade do código. |


