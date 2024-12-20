import erroBase from "./erroBase.js"

class NotFound extends erroBase{
    constructor (){
        super("página não encontrada", 404)
    }


}
export default NotFound