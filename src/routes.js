const express = require("express");

const routes = express.Router();

const ProductController = require("./controllers/ProductController");

/* 
    Criando a rota com o parametro GET que acessa o método
    index do controller. Para fazer a listagem dos dados 
    no banco retonando um json
*/
routes.get('/products', ProductController.index);

/* 
    Criando a rota com o parametro GET que acessa o método
    show do controller. Para fazer a listagem detalhada do
    registro usando o id como parâmetro.
*/
routes.get('/products/:id', ProductController.show);

/* 
    Criando a rota com o parametro POST que acessa o método
    store do controller. Para enviar e armazenar os dados 
    no banco, retonando um json.
*/
routes.post('/products', ProductController.store);

/* 
    Criando a rota com o parametro PUT que acessa o método
    update do controller. Para atualizar e armazenar os dados 
    no banco, retonando um json.
*/
routes.put('/products/:id', ProductController.update);

routes.delete('/products/:id', ProductController.destroy);


module.exports = routes;