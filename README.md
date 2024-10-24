# Produto API

## Descrição
A **Produto API** é uma API RESTful para gerenciamento de produtos, construída com **Node.js** e **Express** e utilizando **PostgreSQL** como banco de dados. Essa API permite realizar operações CRUD (Criar, Ler, Atualizar e Deletar) em produtos.

## Tecnologias Utilizadas
- **Node.js** - Plataforma de desenvolvimento JavaScript no backend.
- **Express** - Framework minimalista para Node.js.
- **PostgreSQL** - Sistema de gerenciamento de banco de dados relacional.
- **Docker** - Para facilitar a criação de contêineres de desenvolvimento.
- **Docker Compose** - Gerencia múltiplos contêineres Docker como uma aplicação.

## Pré-requisitos
Antes de rodar o projeto, você precisará ter as seguintes ferramentas instaladas:
- **Git**
- **Node.js** (v16 ou superior)
- **Docker** e **Docker Compose**

## Instalação e Configuração

Siga os passos abaixo para configurar e rodar o projeto localmente.

1. Clone o repositório para sua máquina:
   ```bash
   git clone https://github.com/seuusuario/produto-api.git
   cd produto-api
   ```

2. Instale as dependências do projeto:
   ```bash
   npm install
   ```

3. Execute o Docker Compose para iniciar o ambiente de banco de dados:
   ```bash
   docker-compose up
   ou
   docker-compose up -d #para rodar em segundo plano
   ```

4. Em outra instância do terminal, inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5. Acesse a aplicação:
   A API estará rodando localmente em [http://localhost:3000](http://localhost:3000).

## Rotas da API

### Criar um novo produto
- **Rota**: `POST /products`
- **Descrição**: Cria um novo produto.
- **Exemplo de corpo da requisição**:
  ```json
  {
    "name": "Produto Exemplo",
    "price": 199.99,
    "description": "Descrição do produto"
  }
  ```

### Listar todos os produtos
- **Rota**: `GET /products`
- **Descrição**: Retorna todos os produtos cadastrados.
- **Resposta**: 
  ```json
  [
    {
      "id": 1,
      "name": "Produto Exemplo",
      "price": 199.99,
      "description": "Descrição do produto"
    }
  ]
  ```

### Buscar um produto específico
- **Rota**: `GET /products/:id`
- **Descrição**: Retorna um produto com o `id` especificado.
  
### Atualizar um produto
- **Rota**: `PUT /products/:id`
- **Descrição**: Atualiza as informações de um produto existente.
- **Exemplo de corpo da requisição**:
  ```json
  {
    "name": "Novo nome do produto",
    "price": 249.99
  }
  ```

### Deletar um produto
- **Rota**: `DELETE /products/:id`
- **Descrição**: Remove o produto com o `id` especificado.

## Documentação da API
Você pode consultar a documentação completa e interativa da API utilizando a ferramenta [Swagger](https://swagger.io/) ou [Postman](https://www.postman.com/) para testar as rotas disponíveis. 

## Contribuição
Fique à vontade para contribuir com melhorias, correções ou novas funcionalidades! Basta seguir os seguintes passos:
1. Faça um fork do projeto
2. Crie uma nova branch (`git checkout -b feature/nova-funcionalidade`)
3. Realize as alterações desejadas
4. Envie um pull request para análise

## Autor
Projeto desenvolvido por **Vitor Ribeiro**.

- [LinkedIn](https://www.linkedin.com/in/vitor-ribeiro)
- [GitHub](https://github.com/vitor-ribeiro)

## Licença
Este projeto está sob a licença MIT - veja o arquivo [LICENSE](./LICENSE) para mais detalhes.
