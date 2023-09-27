# LAB365-FullStack-M03-FrontBack-LABPharmacy

## Projeto Avaliativo do Módulo3
### LAB365- FullStack - Itaguaçu
### Projeto realizado em squad, formado pelos alunos:
- Carlos Hnerique Moreira Junior (Github - )
- Debora Patricia Santos de Souza (Github - )
- Rafael Zampieron (Github - )
- Ricardo Werner Grosscklauss (Github - https://www.github.com/ricado-werner)

#### Criação de sistema de gerenciamento de Farmácias e Medicamentos:
- Frontend - React.JS
- Backend - Node.JS, Express, Sequelize em banco de dados PostgreSQL
#### Nome do sistema: Pharmacy Central System 

### 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/ricardo-werner)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ricardo-werner)


Status - Em Desenvolvimento

### Demonstração

Estrutura geral do front-end do Pharmacy Central System

Tela do frontend do Pharmacy Central System
<p align="center">
  <!--img width="480" src="src/assets/to_readme/telaSistema.JPG"-->
</p>

Tela do arquivo json com os dados das farmácias
<p align="center">
  <!--img width="480" src="src/assets/to_readme/jsonPharmacys.JPG"-->
</p>
Tela do arquivo json com os dados dos medicamentos
<p align="center">
  <!--img width="480" src="src/assets/to_readme/jsonMedications.jpg"-->
</p>
Video do Pharmacy Central System
<p align="center">
    <!--img width="480" src="src/assets/to_readme/PharmaCentralSystem.gif"-->
</p>

Estrutura geral do back-end do Pharmacy Central System
<p align="center">
  <img width="480" src="src/assets/to_readme/estruturaFoldersTables.jpg">
</p>

Estrutura geral do back-end das Tabelas
<p align="center">
  <!--img width="480" src="src/assets/to_readme/geralTabelas.jpg"-->
</p>

Estrutura geral do back-end dos Usuários
<p align="center">
  <!--img width="480" src="src/assets/to_readme/usuarioTable.jpg"-->
</p>

Estrutura geral do back-end das Farmácias
<p align="center">
  <!--img width="480" src="src/assets/to_readme/depositoTable.jpg"-->
</p>
Estrutura geral do back-end dos Medicamentos
<p align="center">
  <!--img width="480" src="src/assets/to_readme/medicamentoTable.jpg"-->
</p>

### O Desafio
Neste projeto foi proposto criar um sistema completo, com frontend e backend,  para controlarmos uma rede de farmácias e os medicamentos em estoque, de forma online codificado em React.JS e Node.JS

### Requisitos da Aplicação

| Item | Descrição                                                              |
| ---- | ---------------------------------------------------------------------- |
| 1    | O sistema deverá ser desenvolvido em React.                            |
| 2    | O sistema deverá seguir o Roteiro da Aplicação.                        |
| 3    | Modelagem do layout, formatos, tipografias. cores e organização livre. |
| 3.1  | Opcional a utilização do Bootstrap ou Style components.                |
| 4    | Deverá ser gravado um vídeo de apresentação do sistema.                |

### Formato do Sistema

#### Front-end

| Item                  | Descrição                                                                          |
| --------------------- | ---------------------------------------------------------------------------------- |
| Login                 | Pág. com email e senha obrigatórios.                                               |
| Cad. Farmácia         | Pág. com os principais dados da farmácia e cep.                                    |
| Cad. Medicamento      | Pág. com as principais informações e tipo.                                         |
| Lista de Farmácias    | Pág. com uma tabela com modal para exibição de todas as farmácias                  |
| Lista de Madicamentos | Pág. com cards com modal para a exibição de todos os medicamentos.                 |
| Mapa com as farmácias | Pág. com um mapa da região de Florianópolis-SC,                                    |
|                       | com as localidades georeferênciadas das farmácias                                  |
| Menu Navegação        | Barra superior da página com logo e links para todas as páginas acima.             |
| Rodapé                | Barra inferior da página com informações de propriedade intectual e desenvolvedor. |
| Extra                 | Pág. de cadastro de usuário.                                                       |
| Extra                 | Pág. de FAQ                                                                        |

### Back-end

### Requisitos da Aplicação

| Item | Descrição                                                                    |
| ---- | ---------------------------------------------------------------------------- |
| 1    | Ser uma API Rest desenvolvida em Node.JS com uso do Express.js.              |
| 2    | Utilizar o banco de dados PostgreSQL.                                        |
| 3    | Ser planejado utilizando o modelo Kanban na ferramenta Trello.               |
| 4    | Ser versionado no GITHub, possuindo uma documentação detalhada no readme.md. |
| 5    | Deverá ser gravado um vídeo de apreentação do sistema.                       |

### Formato do Sistema

| Item                                         | Descrição                                                                                            |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Carregamento de Dados Iniciais               | Deve ser utilizado como Sistema Gerenciador de BD o PostgreSQL (nome: pcsbd)                         |
| Cadastro de Usuário                          | Serviço de cadastro de usuário com dados completos, definição de Endpoint com status                 |
| Login do Usuário                             | Serviço para realizar o login, definição de Endpoint com status                                      |
| Atualização dos Dados de Usuário             | Serviço para alterar/atualizar os dados do usuário, definição de Endpoint com status                 |
| Atualização do Status do Usuário no Sistema  | Serviço para alterar/atualizar o status do usuário, definição de Endpoint com status                 |
| Atualização de Senha do Usuário              | Serviço para alterar/atualizar a senha de determinado usuário, definição do Endpoint com status      |
| Listagem de Usuário pelo indentificador      | Serviço de consulta de usuário pelo ID, definição de Endpoint com status                             |
| Cadastro de Despósito                        | Serviço de cadastro de DEpósito com dados completos, definição de Endpoint com status                |
| Atualização dos dados de Despósito           | Serviço para alterar/atualizar os dados de determinado depósito , definção de Endpoint com status    |
| Atualização do Status do Depósito no Sistema | Serviço apra alterar/atualizar o status do depósito no sistema, definição de Endpoint com status     |
| Listagem de Depósitos                        | Serviço de listagem de depósitos cadastrados, definição do Endpoint com status                       |
| Listagem de Depósito pelo identificador      | Serviço de consulta de depósito pelo ID, definição de Endpoint com status                            |
| Exclusão de Depósitos                        | Serviço para excluir um depósito pelo ID, definição de Endpoint com status                           |
| Cadastro de Medicamentos                     | Serviço de cadastro de Medicamentos com dados completos, definição de Endpoint com status            |
| Atualização dos dados de Medicamentos        | Serviço para alterar/atualizar os dados de determinado medicamento, definição de Endpoint com status |
| Listagem de Medicamentos                     | Serviço de listagem de medicamentos cadastrados, definição de Endpoint com status                    |
| Listagem de Medicamentos pelo indentificador | Serviço de listagem de medicamentos pelo ID, definição de Endpoint com status                        |
| Exclusão de Medicamento                      | Serviço para excluir um medicamento pelo ID, definição de Endpoint com status                        |

### Plano do Projeto

No desenvolvimento desta aplicação, colocamos em prática:

| Item | Descrição  |
| ---- | ---------- |
| 1    | HTML       |
| 2    | CSS        |
| 3    | JavaScript |
| 3.1  | React.JS   |
| 4    | Node.JS    |
| 5    | Express.JS |
| 6    | Sequelize  |
| 7    | PostgreSQL |
| 8    | Deploy     |
| 9    | Skills     |
| 10   | Squad      |

### Tecnologias utilizadas:

- Visual Studio Code
- NodeJS (compilação Vite - página oficial - https://vitejs.dev/ )
- Trello


## Para utilizar este projeto como base, faça o seguinte passo-a-passo:

### Nota - Para que o sistema funcione corretamente, primeiramente é necessário ter instalado no seu computador:
- Node.JS
- Node Package Manager(NPM)
- PostgreSQL (Base de dados)
- DBeaver (Gerenciador de banco de dados)

Clone o projeto para a sua máquina
```bash
git@github.com:ricardo-werner/LAB365-FullStack-M03-FrontBack-LABPharmacy.git
```
Obs: necessário configurar SSH [(veja como clicando aqui)](https://www.youtube.com/watch?v=n-H1eFSsugo)

Instale as dependências.
Nota - para rodar este comando é necessário ter instalado no computador o NodeJS e o Node Package Manager(NPM)

###Frontend

```bash
npm install
``` 

- Rode o servidor

```bash
npm run server
```

- Rode o projeto

```bash
npm run dev
```

### Backend
```bash
npm install
```

- Rode o projeto

```bash
npm run start:dev


### Observações

Este projeto vem com o [JSON Server](https://www.npmjs.com/package/json-server) instalado e configurado.

Este projeto já vem com o Bootstrap 5 e react-bootstrap instalado e configurado.


## Autores:
Turma: Full-Stack - Itaguaçu
Squad: ItaguaDevs
Mentoria: Prof. Pedro Henrique Silva
Senai/SC: Serviço Nacional de Aprendizagem Industrial
LAB365: espaço do @senai.sc para desenvolver as habilidades do futuro
Floripa Mais Tech  
