import mongoose, { Schema } from "mongoose";

const autorSchema= new Schema({

    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, required: [true, "nome do autor é obrigatório"]},
    nacionalidade: {type: String}
},{versionKey: false})

const Autor =  mongoose.model("autores", autorSchema)

export {Autor, autorSchema}