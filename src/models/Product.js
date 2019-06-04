const mongoose = require("mongoose");

/* 
    Importando a dependência de paginação 
    do mongodb.
*/
const mongoosePaginate = require("mongoose-paginate");

/*
    Criando o model que representa os campos
    da tabela no banco de dados.

*/
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

/*
    Importando o plugin de paginação dentro do mongodb.
*/
ProductSchema.plugin(mongoosePaginate);
/*
    Inserindo os campos do model na tabela Product
    que também será criada.
*/
mongoose.model("Product", ProductSchema);