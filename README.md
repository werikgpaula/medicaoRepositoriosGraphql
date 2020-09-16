Para rodar o projeto, siga os seguintes passos:

- Primeiro, é necessário ter nodejs instalado na máquina. Para instalação, visite o site oficial.
- Rode o comando "npm install" dentro da pasta do projeto.
- Execute o servidor através do comando "node server.js"
- A API será instanciada da porta 3001, ou seja, para enviar as requisições, basta apontar para localhost:3001/rota
- As rotas possíveis são "question1", "question2" e assim sucessivamente, até "questions6"

- ATENÇÃO: Para testar o projeto é necessário, após clonar o projeto, gerar uma nova access token através do github e adicionada à variavel GITHUBTOKEN no inicio ao arquivo querys.js

- Os CSV's podem ser encontrados no diretório "./csv"