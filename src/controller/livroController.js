import livro from "../models/Livro.js";

class livroController {

    static async listarLivros (req, res){
        try {
            const livrosDAO= await livro.find({});
            res.status(200).json(livrosDAO)
            
        } catch (error) {
            res.status(500).json({ message: `${error.message} falha ao acessar livros`})
            
        }


    }
    static async cadastrarLivro(req,res){
        try {
            const novoLivro = await livro.create(req.body)
            res.status(201).json({message:  "criado com sucesso", livro: novoLivro})
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: `${error.message} falha ao cadastrar livro`})
        }


    }
    static async listarLivrosId (req, res){
        try {
            
            const novoLivro= await livro.findById(req.params.id)
            res.status(200).json(novoLivro)
            
        } catch (error) {
            res.status(500).json({ message: `${error.message} falha ao acessar livro `})
            
        }
    }
    static async atualizarLivrosId (req, res){
        try {
            await livro.findByIdAndUpdate(req.params.id, req.body)
            res.status(200).json( {message: "livro atualizado com sucesso"})
            
        } catch (error) {
            res.status(500).json({ message: `${error.message} falha ao atualizar livro`})
            
        }
    }
    static async deletarLivrosId (req, res){
        try {
            await livro.findByIdAndDelete(req.params.id)
            res.status(200).json({message: "livro deletado com sucesso"})
            
        } catch (error) {
            res.status(500).json({ message: `${error.message} falha ao deletar livro`})
            
        }
    }
    
}

export default livroController;

