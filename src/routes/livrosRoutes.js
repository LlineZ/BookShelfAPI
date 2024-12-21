import express from "express";
import livroController from "../controller/livroController.js";
import paginar from "../middlewares/paginar.js";

const routes = express.Router();
routes.get("/livros", livroController.listarLivros, paginar)
routes.get("/livros/busca",livroController.buscarLivrosFiltro, paginar)
routes.get("/livros/:id", livroController.listarLivrosId)
routes.post("/livros", livroController.cadastrarLivros)
routes.put("/livros/:id", livroController.atualizarLivrosId)
routes.delete("/livros/:id", livroController.deletarLivrosId)

export default routes;