import RequsicaoIncorreta from "./RequisicaoIncorreta.js";

class ErroValidacao extends RequsicaoIncorreta{
    constructor(erro){
        const mensagensErro = Object.values(erro.errors)
            .map(erro=> erro.message)
            .join("; ")
            super( `Os seguintes erros foram encontrados: ${mensagensErro} `, 400);
        
    }
}

export default ErroValidacao