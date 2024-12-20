import express from "express";
import connectDAO from "./config/dbConnect.js";
import routes from "./routes/index.js";
import mongoose from "mongoose";
import manipuladorDeErros from "./middlewares/tratamentoDeErros.js";
import manipulador404 from "./middlewares/Manipulador404.js";

//conexão com o banco de dados
const conexãoDB = await connectDAO();

conexãoDB.on("error", (err)=>{
    console.log(err.code);
})

conexãoDB.once("open", ()=>{
    console.log("conexão bem sucedida");

})

//iniciaçao de app
const app = express();
routes(app);


//configuraçao de req 404
app.use(manipulador404)

//adiçao de middlewares
app.use(manipuladorDeErros)


export default app
