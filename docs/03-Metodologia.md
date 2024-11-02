
# Metodologia

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

Descreva aqui a metodologia de trabalho do grupo para atacar o problema. Definições sobre os ambiente de trabalho utilizados pela  equipe para desenvolver o projeto. Abrange a relação de ambientes utilizados, a estrutura para gestão do código fonte, além da definição do processo e ferramenta através dos quais a equipe se organiza (Gestão de Times).

## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com)
foi utilizado para hospedagem do repositório.

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software
- `unstable`: versão já testada do software, porém instável
- `testing`: versão em testes do software
- `dev`: versão de desenvolvimento do software

Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

- `documentation`: melhorias ou acréscimos à documentação
- `bug`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida

A configuração do projeto foi feita utilizando o Git como ferramenta de controle de versão, com o código-fonte armazenado no GitHub. A estrutura de branches foi organizada da seguinte maneira:

Branches: Foram criadas múltiplas branches para manter o fluxo de desenvolvimento organizado. A branch main contém a versão estável do software, enquanto a branch dev é usada para desenvolvimento ativo. Branches adicionais como testing e unstable foram utilizadas para testes e versões instáveis.

Commits e Merges: A equipe seguiu uma convenção de commits descritivos para manter um histórico claro. Antes de fazer merges na branch main, o código era revisado e testado na branch testing. Pull requests eram usados para facilitar a revisão de código, garantindo qualidade antes da integração.

Gerência de Tags: As tags foram usadas para marcar versões importantes do software, facilitando o rastreamento de lançamentos e pontos de restauração.

Gerência de Issues: Utilizamos o sistema de issues do GitHub para registrar tarefas, bugs, e novas funcionalidades. Issues foram categorizadas com etiquetas como "bug," "feature," e "documentation" para facilitar a organização e priorização. O quadro Kanban ajudou a monitorar o progresso das issues, movendo-as entre as colunas "Todo," "In Progress," e "Done."


## Gerenciamento de Projeto

### Divisão de Papéis

#### Papéis no Projeto

#### Eduardo Felipe - Scrum Master
Responsabilidades: 
Facilitar o processo Scrum, remover impedimentos e garantir que a equipe siga as práticas ágeis corretamente. Ele atua como mediador nas reuniões diárias, promove a colaboração e assegura que o time esteja focado nos objetivos do sprint. Também garante que o ambiente de trabalho seja eficiente e que as práticas de desenvolvimento sejam seguidas adequadamente.

#### João Augusto – Desenvolvedor Backend

Responsabilidades:
Implementar e manter a lógica do servidor e a API da aplicação.
Integrar serviços externos e gerenciar a arquitetura do backend.
Garantir a segurança, escalabilidade e desempenho do servidor.
Colaborar com o frontend para garantir que os dados sejam servidos corretamente.

#### Taína de Oliveira – Desenvolvedora Frontend

Responsabilidades:
Desenvolver a interface de usuário da aplicação utilizando React.js.
Garantir que o design seja responsivo e amigável, proporcionando uma experiência de usuário agradável.
Implementar componentes reutilizáveis e gerenciar o estado da aplicação.
Trabalhar em conjunto com o backend para consumir as APIs e integrar a lógica do frontend.

#### Ellen Campos – Especialista em Banco de Dados

Responsabilidades:
Projetar, configurar e gerenciar o banco de dados MySQL.
Garantir a integridade e eficiência dos dados, implementando otimizações necessárias.
Criar e manter consultas, tabelas e índices para suportar as funcionalidades da aplicação.
Realizar backup e recuperação de dados, além de garantir a segurança das informações armazenadas.

#### Guilherme Henrique – Analista de Requisitos

Responsabilidades:
Levantar, documentar e priorizar os requisitos funcionais e não funcionais do projeto. Garantir que os requisitos estejam bem definidos e compreendidos pela equipe.

#### Lorena Beatriz - Analista de Requisitos

Responsabilidades:
Levantar, documentar e priorizar os requisitos funcionais e não funcionais do projeto. Garantir que os requisitos estejam bem definidos e compreendidos pela equipe.


## 1. Processo

O grupo começou a implementar o processo Scrum no dia 9 de setembro. A estrutura do Scrum foi adaptada para atender às necessidades do projeto de faculdade, com reuniões regulares para garantir que todos os membros estivessem alinhados e o progresso fosse monitorado continuamente.

Reuniões de Planejamento: As reuniões de planejamento ocorreram quase todos os sábados, onde o grupo se reunia para definir as tarefas da semana, estimar o esforço necessário para cada item do backlog, e priorizar as funcionalidades a serem desenvolvidas. Durante essas reuniões, discutimos o objetivo do sprint e dividimos as tarefas com base nas habilidades e disponibilidade de cada membro.

Daily Standups: Embora o grupo não pudesse se reunir diariamente, usamos mensagens assíncronas para fazer check-ins rápidos sobre o que cada membro tinha feito, o que planejava fazer, e se havia algum impedimento que precisasse ser resolvido.

Divisão de Tarefas e Desenvolvimento: A partir de 1 de outubro, a equipe começou a dividir as tarefas de desenvolvimento entre os membros, garantindo que cada um tivesse responsabilidades claras e específicas. Os processos foram divididos com base nas áreas de especialização dos membros, com o objetivo de maximizar a eficiência.

Progresso do Desenvolvimento: No dia 21 de outubro, os processos 1 e 2 estavam praticamente concluídos, e os resultados foram revisados em uma reunião para garantir que todos os requisitos estivessem sendo atendidos. No dia 28 de outubro, o processo 3 ainda estava parcialmente completo, e o processo 4 ainda estava a fase inicial.

   
### GitHub Projects
   
Uso do GitHub Projects: O grupo utilizou os quadros Kanban do GitHub para gerenciar o backlog e acompanhar o progresso das tarefas. O quadro foi dividido em colunas como "Todo", "In Progress", e "Done" para facilitar a visualização do status de cada tarefa.

Organização do Backlog: As funcionalidades foram divididas em pequenas tarefas, e cada item do backlog foi priorizado com base no valor que traziam para o projeto. O versão de quadro Kanban do Github ajudou a equipe a manter uma visão clara das tarefas pendentes e das responsabilidades individuais.



### Ferramentas

As ferramentas empregadas no projeto são:

* React.js: Biblioteca JavaScript utilizada para a construção de interfaces de usuário. Permite a criação de componentes reutilizáveis e facilita a gestão eficiente do estado da aplicação. Foi escolhida por sua ampla adoção no mercado e facilidade de manutenção de interfaces dinâmicas e responsivas.

* NestJS: Framework progressivo para o desenvolvimento de aplicações Node.js eficientes e escaláveis, utilizando TypeScript. Oferece uma estrutura modular, sendo ideal para aplicações complexas. A escolha foi baseada na sua integração com TypeScript e arquitetura robusta, o que facilita o desenvolvimento de aplicações de grande porte.

* MySQL: Sistema de gerenciamento de banco de dados relacional amplamente utilizado, conhecido por sua robustez e eficiência no gerenciamento de dados estruturados. Foi selecionado por sua confiabilidade e capacidade de lidar com grandes volumes de dados de forma eficiente.

* Figma: Ferramenta de design colaborativo, utilizada para a criação de protótipos e interfaces de usuário. Facilita o trabalho em equipe e possibilita a iteração rápida no design. Figma foi escolhido pela sua natureza colaborativa e pela capacidade de integrar feedback de diferentes membros da equipe em tempo real.

* Editor de Código – Visual Studio Code: Ambiente de desenvolvimento integrado (IDE) selecionado para o desenvolvimento da aplicação, oferecendo suporte a diversas linguagens e ferramentas. A escolha foi feita com base na sua leveza, personalização e suporte a uma grande variedade de extensões que aumentam a produtividade.

* Repositório Remoto – GitHub: Utilizado para o armazenamento do código-fonte, permite a colaboração entre os membros da equipe, bem como o controle de versões do projeto. GitHub foi escolhido por sua integração com ferramentas de CI/CD e seu suporte a desenvolvimento colaborativo.

* API Google Maps: Ferramenta utilizada para fornecer funcionalidades de geolocalização. Permite que os usuários visualizem os pontos de coleta mais próximos com base na sua localização. Foi escolhida pela sua precisão e ampla adoção, além das ferramentas de mapeamento integradas.
