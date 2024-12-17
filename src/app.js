import express from "express"
import connectDAO from "./config/dbConnect.js"
import routes from "./routes/index.js"


//conexão com o banco de dados
const conexãoDB = await connectDAO()

conexãoDB.on("error", (err)=>{
    console.log(err.code)
})

conexãoDB.once("open", ()=>{
    console.log("conexão bem sucedida")

})

//iniciaçao de app
const app = express()
routes(app)

export default app
