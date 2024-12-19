import mongoose from "mongoose";
import { Autor } from "../models/Autor.js";

class autorController {

    static async listarAutores (req, res){
        try {
            const autoresDAO= await Autor.find({});
            res.status(200).json(autoresDAO)
            
        } catch (error) {
            res.status(500).json({ message: `${error.message} falha ao acessar autores`})
            
        }


    }
    static async cadastrarAutor(req,res){
        try {
            const novoAutor = await Autor.create(req.body)
            res.status(201).json({message:  "criado com sucesso", autor: novoAutor})
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: `${error.message} falha ao cadastrar autor`})
        }


    }
    static async listarAutoresId (req, res){
        try {
            
            const novoAutor= await Autor.findById(req.params.id)
            if(novoAutor !== null) {
                res.status(200).json(novoAutor)
                
            }

            else{
                res.status(400).json({ message: "id do autor não localizado "})

            }
            // if (condition) {
                
            // }
        }
         catch (error) {

            if (error instanceof mongoose.Error.CastError){
                res.status(400).json({message: "um ou mais dados fornecidos estão incorretos"})
            }
            else{
                
                res.status(500).json({ message: `${error.message} falha ao acessar autor `})
                
            } 
        }
    }
    
    static async atualizarAutorId (req, res){
        try {
            await Autor.findByIdAndUpdate(req.params.id, req.body)
            res.status(200).json( {message: "autor atualizado com sucesso"})
            
        } catch (error) {
            res.status(500).json({ message: `${error.message} falha ao atualizar autor`})
            
        }
    }
    static async deletarAutorId (req, res){
        try {
            await Autor.findByIdAndDelete(req.params.id)
            res.status(200).json({message: "autor deletado com sucesso"})
            
        } catch (error) {
            res.status(500).json({ message: `${error.message} falha ao deletar autor`})
            
        }
    }
    
}

export default autorController;

