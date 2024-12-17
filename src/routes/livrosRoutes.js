import express from "express";
import livroController from "../controller/livroController.js";

const routes = express.Router();
routes.get("/livros", livroController.listarLivros)
routes.get("/livros/:id", livroController.listarLivrosId)
routes.post("/livros", livroController.cadastrarLivro)
routes.put("/livros/:id", livroController.atualizarLivrosId)
routes.delete("/livros/:id", livroController.deletarLivrosId)

export default routes;