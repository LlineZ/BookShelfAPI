import RequsicaoIncorreta from "../erros/RequisicaoIncorreta.js";


async function paginar(req, res, next){
    try {
        let {limite = 5, pagina = 1, ordenar =" _id:1"} = req.query;
    
        limite = parseInt(limite)
        pagina = parseInt(pagina)
    
        let [ordenarPor, ordem] = ordenar.split(":")
    
        if(pagina < 1 || limite < 1) throw new RequsicaoIncorreta()

        const resultado = req.resultado
    
        const resultadoPaginado= await resultado
            .sort({[ordenarPor] : parseInt(ordem)})
            .skip(limite * (pagina - 1))
            .limit(limite)
            .populate('autor')
            .exec();
    
        
        res.status(200).json(resultadoPaginado)
        
    } catch (error) {
        next(error)
    }
        //paginaçao
}

export default paginar