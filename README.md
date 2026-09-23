# 🚀 DevShowcase API

API REST desenvolvida para gerenciamento de perfis de desenvolvedores, projetos, tecnologias e feedbacks.

O projeto foi desenvolvido utilizando Node.js, Express e TypeScript, com Prisma ORM para acesso e persistência dos dados.

A aplicação utiliza PostgreSQL em ambiente de produção e está publicada na nuvem.

---

## 👥 Integrantes

- DANIELE ROCHA MELO
- EDILANE DE SOUZA COSTA OLIVEIRA

---

## 🛠️ Tecnologias utilizadas

- Node.js
- Express
- TypeScript
- Prisma ORM
- PostgreSQL
- Supabase
- Swagger / OpenAPI
- Render
- Git e GitHub
- Postman

---

## 📌 Funcionalidades

### Perfis

- Cadastro de perfis.
- Consulta de perfil por identificador.

### Tecnologias

- Cadastro de tecnologias.
- Listagem das tecnologias cadastradas.

### Projetos

- Cadastro de projetos.
- Associação de projetos a perfis.
- Associação de projetos a tecnologias.
- Listagem de projetos.
- Filtro de projetos por tecnologia.
- Paginação da listagem de projetos.
- Sistema de upvotes.

### Feedbacks

- Cadastro de feedback para projetos.
- Avaliação de projetos com notas de 1 a 5.
- Cálculo automático da média das avaliações.
- Atualização da média do projeto após novos feedbacks.

### Tratamento de erros

A API possui validação dos dados recebidos e tratamento de erros, incluindo:

- `400 Bad Request` para dados inválidos.
- `404 Not Found` para recursos não encontrados.
- Mensagens de erro amigáveis.

---

## 🔗 Endpoints

### Profiles

| Método | Endpoint | Descrição |
|---|---|---|
| POST | `/api/profiles` | Cadastrar perfil |
| GET | `/api/profiles/{id}` | Buscar perfil por ID |

### Technologies

| Método | Endpoint | Descrição |
|---|---|---|
| POST | `/api/technologies` | Cadastrar tecnologia |
| GET | `/api/technologies` | Listar tecnologias |

### Projects

| Método | Endpoint | Descrição |
|---|---|---|
| POST | `/api/projects` | Cadastrar projeto |
| GET | `/api/projects` | Listar projetos |
| PUT | `/api/projects/{id}/upvote` | Adicionar upvote ao projeto |

### Feedbacks

| Método | Endpoint | Descrição |
|---|---|---|
| POST | `/api/projects/{id}/feedbacks` | Cadastrar feedback em um projeto |

---

## 🔎 Filtro e paginação

A listagem de projetos permite utilizar parâmetros de consulta para paginação e filtro por tecnologia.

Exemplo:

`GET /api/projects?page=1&limit=10&technology=TypeScript`

Parâmetros:

- `page`: página solicitada.
- `limit`: quantidade máxima de registros.
- `technology`: tecnologia utilizada para filtrar os projetos.

---

## ⭐ Sistema de avaliação

Os projetos podem receber feedbacks contendo:

- Nome do autor;
- Comentário;
- Nota entre 1 e 5.

Após o cadastro de um feedback, a API recalcula automaticamente a média das avaliações e atualiza o campo `averageRating` do projeto.

---

## 👍 Sistema de Upvotes

Um projeto pode receber upvotes através do endpoint:

`PUT /api/projects/{id}/upvote`

Cada requisição válida incrementa o campo `upvotes` do projeto.

---

## 📚 Documentação da API

A documentação interativa foi desenvolvida utilizando Swagger/OpenAPI.

Com a aplicação em execução, a documentação pode ser acessada pelo endpoint:

`/api-docs`

A documentação permite visualizar os endpoints, parâmetros e operações disponíveis na API.

---

## 🗄️ Banco de dados

Em produção, a aplicação utiliza **PostgreSQL**, hospedado no Supabase.

Principais entidades:

- Profile
- Project
- Technology
- Feedback

### Relacionamentos

- Profile **1:N** Project
- Project **N:N** Technology
- Project **1:N** Feedback

---

## ☁️ Deploy

A API está publicada no Render.

O serviço está integrado ao repositório do GitHub, permitindo a realização do deploy da aplicação a partir do código versionado.

A configuração de produção utiliza variáveis de ambiente para proteger as credenciais de acesso ao banco de dados.

---

## 👩‍💻 Divisão das atividades

### EDILANE DE SOUZA COSTA OLIVEIRA

Responsável pelas atividades relacionadas a:

- Profile;
- Technology;
- Estruturação das funcionalidades de cadastro e consulta dessas entidades;
- Validação e testes das funcionalidades sob sua responsabilidade.

### DANIELE ROCHA MELO

Responsável pelas atividades relacionadas a:

- Project;
- Relacionamentos entre projetos e tecnologias;
- Feedback;
- Cálculo da média das avaliações;
- Sistema de upvotes;
- Filtro por tecnologia;
- Paginação;
- Tratamento de erros;
- Swagger/OpenAPI;
- Configuração do PostgreSQL;
- Integração com Supabase;
- Deploy da aplicação no Render;
- Testes das funcionalidades sob sua responsabilidade.
