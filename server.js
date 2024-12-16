// import http from "http";
import "dotenv/config";
import app from "./src/app.js";

// const rotas = {
//     "/": "pagina inicial",
//     "/x": "curso sobre x",
// }

// const server = http.createServer((req, res)=>{
//     res.writeHead(200, {"Content-Type" : "text/plain"});
//     res.end(rotas[req.url]);
// })

app.listen(3000, (err)=>{
    if (err)
        console.error(err.code)
    console.log("Listening on port 3000")
})