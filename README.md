# ProductsAPI

## Descrição
Este é um projeto de API REST simples desenvolvida em **Node.js** utilizando **Express**, que gerencia um CRUD de produtos em uma estrutura simulada de banco de dados (array em memória).

## Tecnologias Utilizadas
- Node.js
- Express
- Body-parser

## Instalação e Execução

1. Clone este repositório:
   ```bash
   git clone https://github.com/mayararoseno1/Api-Node.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd ProductsAPI
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor:
   ```bash
   npm start
   ```

5. O servidor estará rodando em:
   ```
   http://localhost:3000
   ```

## Rotas da API

### Listar todos os produtos
**GET** `/api/products`

### Obter um produto por ID
**GET** `/api/products/:id`

### Criar um novo produto
**POST** `/api/products`
#### Corpo da requisição:
```json
{
  "name": "Produto Exemplo",
  "price": 100.00
}
```

### Atualizar um produto existente
**PUT** `/api/products/:id`
#### Corpo da requisição:
```json
{
  "name": "Produto Atualizado",
  "price": 150.00
}
```

### Deletar um produto
**DELETE** `/api/products/:id`

## Considerações
Esta API é apenas um exemplo didático e não utiliza um banco de dados real. Todos os dados são armazenados temporariamente na memória do servidor.

