import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const livroSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    titulo: {type: String, required: [true, "nome do livro é obrigatório"]},
    editora: {type: String},
    preco: {type: Number, min:[0, "preço deve estar entre 0 e 200R$"], max: [2000, "preço deve estar entre 0 e 2000R$"]},
    paginas: {type: Number, validate: {validator: (paginas)=>{return paginas<5000 && paginas>0}, message:"paginas deve estar entre 0 e 5000 valor fornecido: {VALUE}"}},
    autor: { type: mongoose.Schema.Types.ObjectId, ref: "Autor", required: [true, "o autor é obrigatório"] }
}, {versionKey: false});


const livro = mongoose.model("livros", livroSchema);

export default livro;


