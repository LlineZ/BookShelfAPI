import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autorRoutes.js"

const routes = (app) =>{

    app.route("/").get((req, res)=>{
        res.status(200).send("curso node")

    })
    app.use(express.json(), livros, autores)
    // app.use(express.json())
    // app.use("/", livros )
}

export default routes