import express from "express"
import connectDAO from "./config/dbConnect.js"
import livro from "./models/Livro.js"



const conexãoDB = await connectDAO()

conexãoDB.on("error", (err)=>{
    console.log(err.code)
})

conexãoDB.once("open", ()=>{
    console.log("conexão bem sucedida")

})

//@Root1234567890
const app = express()
app.use(express.json())





app.get("/" , (req, res) => {

    res.status(200).send("pagina inicial");

})
app.get("/livros" , async (req, res) => {
    const livrosDAO= await livro.find({});
    res.status(200).json(livrosDAO);
     
})
app.get("/livros/:id", (req, res) => {

    const { id } = req.params;
    const livroIndex = buscaLivros(id)
    res.status(200).json(livros[livroIndex])

})


app.post("/livros", (req, res)=>{

    livros.push(req.body)
    res.status(201).send("livro cadastrado com sucesso")


})
app.put("/livros/:id", (req, res)=>{

    const { id } = req.params;
    const index = buscaLivros(id)
    livros[index] = req.body
    
    res.status(200).send("livro alterado com sucesso")


})
app.delete("/livros/:id", (req, res)=>{

    const { id } = req.params;
    const index = buscaLivros(id)
    livros.splice(index, 1)

    res.status(200).send("livro deletado com sucesso")

})

export default app
