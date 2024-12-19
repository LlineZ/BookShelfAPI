import express from "express";
import autorController from "../controller/autorController.js";



const routes = express.Router();
routes.get("/autores", autorController.listarAutores)
routes.get("/autores/:id", autorController.listarAutoresId)
routes.post("/autores", autorController.cadastrarAutor)
routes.put("/autores/:id", autorController.atualizarAutorId)
routes.delete("/autores/:id", autorController.deletarAutorId)

export default routes;