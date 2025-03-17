# **Objetivo:** Criar a base de um projeto Node.js com Express.js para receber requisições HTTP.

# **Estudo:**

- Criar projeto com `npm init -y`
- Instalar **Express.js**
- Definir estrutura de pastas (`routes`, `controllers`, `services`)
- Configurar **dotenv** para variáveis de ambiente
- Criar middleware para tratamento de erros

# **🏆 Exercícios:**

- [x]  Criar uma rota `/ping` que retorna `{ status: 'ok' }`.
- [x]  Criar uma rota que retorna uma lista de produtos (mock).
- [x]  Implementar um middleware no Express.js que captura erros e retorna uma resposta formatada em JSON.
- [x]  Configurar dotenv para armazenar a porta e URL da API.
- [x]  Criar uma rota que retorna `Hello World` formatado com JSON.
- [x]  Criar um script que lê um arquivo JSON, altera um valor e salva novamente.
- [x]  Criar um servidor HTTP que serve arquivos HTML, CSS e JS.

# ** Como rodar cada projeto **
 ### Passo 1: Instalar as dependências
Na raiz do projeto, execute o seguinte comando no terminal para instalar as dependências:
````bash
npm install
````
 ### Passo 2: Rodar o servidor
 ````
npm start
````
Exercícios e Comandos para Rodá-los
1. Criar uma rota /ping que retorna { status: 'ok' }
Comando para testar:

Acesse a URL no navegador ou use o Postman:

bash
Copiar
Editar
GET http://localhost:3000/ping
Resposta esperada:

json
Copiar
Editar
{ "status": "ok" }
2. Criar uma rota que retorna uma lista de produtos (mock)
Comando para testar:

Acesse a URL no navegador ou use o Postman:

bash
Copiar
Editar
GET http://localhost:3000/products
Resposta esperada:

json
Copiar
Editar
[
  { "id": 1, "name": "Produto A", "price": 100 },
  { "id": 2, "name": "Produto B", "price": 200 }
]
3. Implementar um middleware no Express.js que captura erros
Comando para testar:

Crie um erro em uma rota (ou use o POST para algo inexistente) e acesse:

bash
Copiar
Editar
GET http://localhost:3000/rota-inexistente
Resposta esperada (se ocorrer um erro):

json
Copiar
Editar
{
  "error": "Página não encontrada"
}
4. Configurar dotenv para armazenar a porta e URL da API
Comando para testar:

O .env já estará configurado para a porta e URL da API. Para verificar se a configuração está funcionando, acesse:

bash
Copiar
Editar
GET http://localhost:3000
O servidor irá rodar na porta configurada no .env.

5. Criar uma rota que retorna Hello World formatado com JSON
Comando para testar:

Acesse a URL no navegador ou use o Postman:

bash
Copiar
Editar
GET http://localhost:3000/hello
Resposta esperada:

json
Copiar
Editar
{ "message": "Hello World" }
6. Criar um script que lê um arquivo JSON, altera um valor e salva novamente
Comando para testar:

Execute o script diretamente no terminal (certifique-se de que o arquivo processBrands.js está configurado corretamente):

bash
Copiar
Editar
node processBrands.js
O script irá ler o arquivo brandsCar.json, alterá-lo e salvar novamente.

7. Criar um servidor HTTP que serve arquivos HTML, CSS e JS
Comando para testar:

Acesse o navegador:

bash
Copiar
Editar
http://localhost:3000
O servidor irá servir o arquivo index.html com seus respectivos arquivos de estilo (CSS) e scripts (JS).
