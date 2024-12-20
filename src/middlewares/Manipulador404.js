import NotFound from "../erros/NotFound.js"

function manipulador404(req, res, next){

    new NotFound().enviarResposta(res)

}
export default manipulador404