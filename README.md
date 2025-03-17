# **Objetivo:** Criar a base de um projeto Node.js com Express.js para receber requisições HTTP.

## **Estudo:**

- Criar projeto com `npm init -y`
- Instalar **Express.js**
- Definir estrutura de pastas (`routes`, `controllers`, `services`)
- Configurar **dotenv** para variáveis de ambiente
- Criar middleware para tratamento de erros

## **🏆 Exercícios:**

- [x] Criar uma rota `/ping` que retorna `{ status: 'ok' }`.
- [x] Criar uma rota que retorna uma lista de produtos (mock).
- [x] Implementar um middleware no Express.js que captura erros e retorna uma resposta formatada em JSON.
- [x] Configurar dotenv para armazenar a porta e URL da API.
- [x] Criar uma rota que retorna `Hello World` formatado com JSON.
- [x] Criar um script que lê um arquivo JSON, altera um valor e salva novamente.
- [x] Criar um servidor HTTP que serve arquivos HTML, CSS e JS.

---

## **Como rodar cada projeto**

### Passo 1: Instalar as dependências

Na raiz do projeto, execute o seguinte comando no terminal para instalar as dependências:

```bash
npm install
````
### Passo 2: Rodar o servidor

Depois de instalar as dependências, inicie o servidor com o comando:
```bash
npm start
````

# ** Exercícios e Comandos para Rodá-los **

- [x] 1. Criar uma rota /ping que retorna { status: 'ok' }
 Comando para testar:
   Acesse a URL no navegador:
````bash
http://localhost:3000/ping
````
 **Resposta esperada:** 
 ````json
{ "status": "ok" }
````

- [x] 2. Criar uma rota que retorna uma lista de produtos (mock)
 Comando para testar:
   Acesse a URL no navegador:
````bash
http://localhost:3000/products
````
 **Resposta esperada:** 
 ````json
[
  {
    "id": 1,
    "name": "Iphone 15",
    "price": 900
  },
  {
    "id": 2,
    "name": "Macbook Air",
    "price": 1500
  },
  {
    "id": 3,
    "name": "Iphone 15 Plus",
    "price": 1100
  }
]
````

- [x] 3. Implementar um middleware no Express.js que captura erros
 Comando para testar:
   Acesse a URL no navegador:
````bash
http://localhost:3000/rota-inexistente
````
 **Resposta esperada:** 
 ````json
{
  "error": "Página não encontrada"
}

````

- [x] 4. Configurar dotenv para armazenar a porta e URL da API
 Comando para testar:
   Acesse a URL no navegador:
````bash
http://localhost:3000
````
 **O servidor irá rodar na porta configurada no .env.** 

 - [x] 5. Criar uma rota que retorna Hello World formatado com JSON
 Comando para testar:
   Acesse a URL no navegador:
````bash
http://localhost:3000/hello
````
 **Resposta esperada:** 
 ````json
{ "message": "Hello World" }
````

- [x] 6. Criar um script que lê um arquivo JSON, altera um valor e salva novamente
 Comando para testar:
   Execute o script diretamente no terminal (certifique-se de que o arquivo processBrands.js está configurado corretamente):
````bash
node processBrands.js
````
 **O script irá ler o arquivo brandsCar.json, alterá-lo e salvar novamente.**  

 - [x] 7. Criar um servidor HTTP que serve arquivos HTML, CSS e JS
 Comando para testar:
   Acesse a URL no navegador:
````bash
http://localhost:3000/projeto
````
 **O servidor irá servir o arquivo index.html com seus respectivos arquivos de estilo (CSS) e scripts (JS).** 

 
