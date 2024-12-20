import mongoose from "mongoose";
import { Autor } from "../models/index.js";

class autorController {

    static async listarAutores (req, res, next){
        try {
            const autoresDAO= await Autor.find({});
            res.status(200).json(autoresDAO)
            
        } catch (error) {
            next(error)
            
        }


    }
    static async cadastrarAutor(req,res, next){
        try {
            const novoAutor = await Autor.create(req.body)
            
            res.status(201).json({message:  "criado com sucesso", autor: novoAutor})
        } catch (error) {

            next(error)
        }


    }
    static async listarAutoresId (req, res, next){
        try {
            
            const novoAutor= await Autor.findById(req.params.id)
            if(novoAutor !== null) {
                res.status(200).json(novoAutor)
                
            }

            else{
                res.status(400).json({ message: "id do autor não localizado "})

            }
            
        }
         catch (error) {
            next(error)
        }
    }
    
    static async atualizarAutorId (req, res, next){
        try {
            await Autor.findByIdAndUpdate(req.params.id, req.body)
            res.status(200).json( {message: "autor atualizado com sucesso"})
            
        } catch (error) {
            next(error)

            
        }
    }
    static async deletarAutorId (req, res, next){
        try {
            await Autor.findByIdAndDelete(req.params.id)
            res.status(200).json({message: "autor deletado com sucesso"})
            
        } catch (error) {
            next(error)

            
        }
    }
    
}

export default autorController;

