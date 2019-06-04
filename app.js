/* Importando o express na aplicação */
const express = require("express");

/* Importando o mongoose na aplicação */
const mongoose = require("mongoose");

/* Importando a biblioteca require-dir na aplicação */
const requireDir = require("require-dir");


/* Iniciando o  express através da constante App */
const app = express();

/* 
Importando o método que permite a aplicação enviar
e receber dados no formato json
 */
app.use(express.json());

/*
Nodemon

Para escutar o arquivo e toda alteração salva ser carregada
é preciso instalar a dependencia nodemon. 

    1. No terminal colocar o seguinte comando: npm install -D nodemon
    2. Abra o package.json e no objeto de scripts adicionar a seguinte
    linha:  "dev": "nodemon app.js"
        Obs. app.js é o nome do arquivo que criei para ser o servidor
    3. Pare a execução do node no servidor e utilize a seguinte linha
    para rodar a aplicação: npm run dev

*/

/*
Docker

Fazer a instalação do docker e subir a imagem do mongodb
1. Acessar o site do docker e baixar a versão CE (Community)
2. Utilizar o comando para baixar o container do mongo: docker pull mongo
3. Utilizar o comando para subir o container: docker run --name mongodb -p 27017:27017 -d mongo
4. Quando reiniciar o pc usar o seguinte comando para subir o container: docker start mongodb

*/

/*
Robo 3T

Baixar o robomongo (Robo 3T) para poder visualizar o conteúdo das tabelas
criadas a partir da API

1. Acessar o site e baixar a versão corrente https://www.robomongo.org/download
*/

/*
Mongoose

Dependencia para utilizar o mongodb no node

1. Acessar o terminal e utilizar o seguinte comando: npm install mongoose
2. Importar o mongoose na aplicação
*/

/* Iniciando o BD */
mongoose.connect("mongodb://localhost:27017/nodeapi", {useNewUrlParser: true});

/*
Require-Dir

Biblioteca que importa automaticamente para o código
todos os arquivos que forem adicionados ou alterados
no repositório informado.

*/

/* Usando a Biblioteca Required para importar o model */
requireDir("./src/models");

/* Atribuindo o model a uma constante que irá utilizar
os métodos de insert, update, delete  */

// const Product = mongoose.model("Product");

/* Criando uma requisição atraves de rotas */
app.use("/api", require("./src/routes"));

app.listen(3001);