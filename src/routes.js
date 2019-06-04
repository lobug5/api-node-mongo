const express = require("express");

const routes = express.Router();

const ProductController = require("./controllers/ProductController");

/* 
Criando a rota com o parametro GET para 
fazer a listagem dos dados no banco retonando um json
*/
routes.get('/products', ProductController.index);

/* 
Criando a rota com o parametro POST para 
enviar e armazenar os dados no banco, retonando um json
*/
routes.post('/products', ProductController.store);

module.exports = routes;