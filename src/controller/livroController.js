import livro from "../models/Livro.js";
import { Autor } from "../models/index.js";
import mongoose from "mongoose";
import erros from "../erros/erroBase.js";

class livroController {

    static async listarLivros (req, res, next){
        try {
            const livrosDAO= await livro.find({});
            res.status(200).json(livrosDAO)
            
        } catch (error) {
            next(error)
            
        }


    }
    static async cadastrarLivros(req, res, next) {
        const novoLivro = req.body;
        try {
            
            const autorEncontrado = await Autor.findById(novoLivro.autor);
            //verificar se o id do autor é valido
            if (autorEncontrado === null){
                res.status(500).json( {message: "erro no id do autor"})
            }
            else{
                let autorId = autorEncontrado._id;
                const livroCompleto = { ...novoLivro, autor: autorId };
                const livroCriado = await livro.create(livroCompleto);
                res.status(201).json({ message: "Criado com sucesso", livro: livroCriado });
        }


        } catch (error) {

            next(error)
        }
    }


    
    static async listarLivrosId (req, res, next){
        try {
            
            const novoLivro= await livro.findById(req.params.id)
            res.status(200).json(novoLivro)
            
        } catch (error) {
            next(error)
            
        }
    }
    static async atualizarLivrosId (req, res,next){
        try {
            await livro.findByIdAndUpdate(req.params.id, req.body)
            res.status(200).json( {message: "livro atualizado com sucesso"})
            
        } catch (error) {
            next(error)
            
        }
    }
    static async deletarLivrosId (req, res, next){
        try {
            await livro.findByIdAndDelete(req.params.id)
            res.status(200).json({message: "livro deletado com sucesso"})
            
        } catch (error) {
            next(error)
            
        }
    }
    static async buscarLivrosEditora (req, res, next){
        try {
            const { editora } = req.query
            const resultadoBusca = await livro.find({editora}) 
            res.status(200).json(resultadoBusca)
        } catch (error) {
            next(error)
        }
    }
    
}

export default livroController;
