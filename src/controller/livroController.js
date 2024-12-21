import livro from "../models/Livro.js";
import { Autor } from "../models/index.js";
import mongoose from "mongoose";
import erros from "../erros/erroBase.js";
import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";

class livroController {

    static async listarLivros (req, res, next){
        try {
            const buscaLivros = livro.find()
            req.resultado = buscaLivros;
            next()

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
    static async buscarLivrosFiltro (req, res, next){
        try {
            const { editora, titulo, maxPreco, minPreco, autor } = req.query


                // greater then lower then 
            // {
            //     numeroPaginas: {
            //       $gte: 500,
            //       $lte: 1000
            //     }
            //   }

            const busca = {};
            //if(titulo) busca.titulo = new RegExp(titulo, "i") soluçao de javascript puro
            if(editora) busca.editora = editora
            if(titulo) busca.titulo = {$regex: titulo, $options: "i"}
            if(minPreco || maxPreco) busca.preco = {}
            if (minPreco) busca.preco.$gte = minPreco
            if (maxPreco) busca.preco.$lte = maxPreco

            if(autor){
                const objAutor = await Autor.findOne({nome: {$regex: autor, $options:"i"}})
                if (objAutor !== null) {
                    busca.autor = objAutor._id

                } else {
                    res.status(200).json([])
                }
            }
            const resultadoBusca = livro.find(busca).populate("autor")

            req.resultado = resultadoBusca

            next()


        } catch (error) {
            next(error)
        }
    }
    
}

export default livroController;
