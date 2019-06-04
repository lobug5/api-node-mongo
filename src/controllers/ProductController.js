const mongoose = require("mongoose");

const Product = mongoose.model("Product");

module.exports = {
    /*
        Método que cria a listagem dos dados que foram
        cadastrados no banco.
    */
    async index(req, res) {
        const { page = 1 } = req.query; 
        const products = await Product.paginate({}, {page , limit: 10 });

        return res.json(products);
    },
    /*
        Método que cria a listagem detalhada do registro
        que foi cadastrado, recebendo como parâmetro o id.
    */
    async show(req, res){
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },
    /*
        Método que insere e retorna o registro que 
        foi cadastrado no banco com o formato json.
    */
    async store(req, res){
        const product = await Product.create(req.body);

        return res.json(product);
    },
    /*
        Método que atualiza e retorna o registro que 
        foi atualizado no banco com o formato json.
    */
    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})

        return res.json(product);
    },
    /*
        Método que deleta o registro com base no 
        ID informado na URL o formato json.
    */
    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }
};