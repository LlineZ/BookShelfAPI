import mongoose from "mongoose";
import erroBase from "../erros/erroBase.js";
import RequsicaoIncorreta from "../erros/RequisicaoIncorreta.js";
import ErroValidacao from "../erros/ErroValidacao.js";

function manipuladorDeErros (erro, req, res,next){
    
    if (erro instanceof mongoose.Error.CastError){
       new RequsicaoIncorreta().enviarResposta(res);
    }
    else if (erro instanceof mongoose.Error.ValidationError){

        new ErroValidacao(erro).enviarResposta(res);
    } 
    else{
        new erroBase().enviarResposta(res);
        
    }
};

export default manipuladorDeErros;